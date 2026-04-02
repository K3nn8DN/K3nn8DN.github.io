import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
  startTime: number;
}

interface WaterRippleEffectProps {
  children: React.ReactNode;
  className?: string;
}

export function WaterRippleEffect({ children, className = '' }: WaterRippleEffectProps) {
  const theme = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const animationFrameRef = useRef<number>();
  const isDraggingRef = useRef(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Only show ripple effect in cozy mode
  const isCozyMode = theme.themeMode === 'cozy';

  useEffect(() => {
    if (!isCozyMode) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [isCozyMode]);

  useEffect(() => {
    if (!isCozyMode || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        const elapsed = currentTime - ripple.startTime;
        const progress = elapsed / 3000; // 3 seconds total duration
        
        ripple.radius = ripple.maxRadius * progress;
        ripple.alpha = Math.max(0, 1 - progress);

        if (ripple.alpha > 0 && ripple.radius < ripple.maxRadius) {
          // Draw multiple concentric rings for water effect
          for (let i = 0; i < 3; i++) {
            const offset = i * 15;
            const ringRadius = ripple.radius - offset;
            
            if (ringRadius > 3) { // Increased threshold to ensure inner ring is also positive
              const ringAlpha = ripple.alpha * (1 - i * 0.2);
              
              // Outer white highlight
              ctx.beginPath();
              ctx.arc(ripple.x, ripple.y, ringRadius, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(255, 255, 255, ${ringAlpha * 0.3})`;
              ctx.lineWidth = 2.5;
              ctx.stroke();
              
              // Inner subtle shadow (only if ringRadius - 2 is positive)
              if (ringRadius > 4) {
                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ringRadius - 2, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(0, 0, 0, ${ringAlpha * 0.15})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
              }
            }
          }

          // Center glow - very subtle and clear (only if radius is large enough)
          const glowRadius = Math.max(1, ripple.radius * 0.3);
          if (glowRadius > 5) { // Only draw when large enough
            const gradient = ctx.createRadialGradient(
              ripple.x,
              ripple.y,
              0,
              ripple.x,
              ripple.y,
              glowRadius
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${ripple.alpha * 0.15})`);
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${ripple.alpha * 0.08})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, glowRadius, 0, Math.PI * 2);
            ctx.fill();
          }

          return true;
        }
        return false;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isCozyMode, dimensions]);

  const addRipple = (x: number, y: number) => {
    if (!isCozyMode) return;

    ripplesRef.current.push({
      x,
      y,
      radius: 0,
      maxRadius: 150,
      alpha: 1,
      speed: 1,
      startTime: performance.now(),
    });

    // Limit number of ripples for performance
    if (ripplesRef.current.length > 12) {
      ripplesRef.current.shift();
    }
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    addRipple(x, y);
  };

  const handleTouchStart = () => {
    isDraggingRef.current = true;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    addRipple(x, y);
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {children}
      {isCozyMode && (
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="absolute inset-0 pointer-events-none z-10"
          style={{ width: dimensions.width, height: dimensions.height }}
        />
      )}
    </div>
  );
}