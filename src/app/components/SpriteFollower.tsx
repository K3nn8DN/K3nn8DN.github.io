import { useEffect, useRef, useState } from "react";
import type { SpriteSet, SpriteFrame } from "./sprites/types";

interface SpriteFollowerProps {
  spriteSet: SpriteSet;
  scale?: number;
}

type AnimationState = "idle" | "walking" | "click";

export function SpriteFollower({
  spriteSet,
  scale = 1,
}: SpriteFollowerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [animationState, setAnimationState] =
    useState<AnimationState>("idle");

  const targetPositionRef = useRef(0);
  const clickIntervalRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const spriteWidth = spriteSet.width * scale;
  const spriteHeight = spriteSet.height * scale;
  const [facing, setFacing] = useState<"left" | "right">(
    "right",
  );

  // -------------------------
  // Get frames + speed
  // -------------------------
  const getFrames = (): SpriteFrame[] => {
    switch (animationState) {
      case "walking":
        return spriteSet.walkFrames;
      case "click":
        return spriteSet.clickFrames;
      default:
        return spriteSet.idleFrames;
    }
  };

  const getSpeed = (): number => {
    switch (animationState) {
      case "walking":
        return spriteSet.animationSpeed.walk;
      case "click":
        return spriteSet.animationSpeed.click;
      default:
        return spriteSet.animationSpeed.idle;
    }
  };

  // -------------------------
  // Mouse / touch tracking
  // -------------------------
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;

      if (x >= 0 && x <= rect.width) {
        const newTarget = Math.max(
          0,
          Math.min(
            x - spriteWidth / 2,
            rect.width - spriteWidth,
          ),
        );

        targetPositionRef.current = newTarget;
      }
    };

    const handleMouseMove = (e: MouseEvent) =>
      handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) =>
      handleMove(e.touches[0].clientX);

    const handleClick = () => {
      if (clickIntervalRef.current)
        clearInterval(clickIntervalRef.current);

      setAnimationState("click");
      setCurrentFrame(0);

      const frames = spriteSet.clickFrames;
      const totalFrames = frames.length * spriteSet.clickLoops;

      let frameCount = 0;

      clickIntervalRef.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % frames.length);
        frameCount++;

        if (frameCount >= totalFrames) {
          if (clickIntervalRef.current)
            clearInterval(clickIntervalRef.current);
          setAnimationState("idle");
          setCurrentFrame(0);
        }
      }, spriteSet.animationSpeed.click);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("click", handleClick);
    container.addEventListener("touchend", handleClick);

    return () => {
      container.removeEventListener(
        "mousemove",
        handleMouseMove,
      );
      container.removeEventListener(
        "touchmove",
        handleTouchMove,
      );
      container.removeEventListener("click", handleClick);
      container.removeEventListener("touchend", handleClick);

      if (clickIntervalRef.current)
        clearInterval(clickIntervalRef.current);
    };
  }, [spriteWidth, spriteSet]);

  // -------------------------
  // Smooth movement loop
  // -------------------------
  useEffect(() => {
    const speed = 3;
    const stopDistance = 14;

    const interval = setInterval(() => {
      setPosition((prev) => {
        const target = targetPositionRef.current;
        const diff = target - prev;
        const distance = Math.abs(diff);
        if (diff !== 0) {
          setFacing(diff > 0 ? "right" : "left");
        }

        // ✅ Stop early to prevent jitter
        if (distance < stopDistance) {
          if (animationState !== "click")
            setAnimationState("idle");
          return prev;
        }

        // Move toward target
        if (animationState !== "click")
          setAnimationState("walking");

        return prev + Math.sign(diff) * speed;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [animationState]);

  // -------------------------
  // Frame animation loop
  // -------------------------
  useEffect(() => {
    setCurrentFrame(0);
  }, [animationState]);

  useEffect(() => {
    if (animationState === "click") return;

    const frames = getFrames();
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, getSpeed());

    return () => clearInterval(interval);
  }, [animationState, spriteSet]);

  // -------------------------
  // Render frame
  // -------------------------
  const renderFrame = () => {
    const frame = getFrames()[currentFrame];

    if (typeof frame === "string") {
      return (
        <img
          src={frame}
          alt="sprite"
          style={{
            width: spriteWidth,
            height: spriteHeight,
            objectFit: "contain",
          }}
        />
      );
    }

    return frame;
  };

  // -------------------------
  // Render
  // -------------------------
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
      style={{ touchAction: "none" }}
    >
      <div
        className="absolute bottom-0"
        style={{
          left: `${position}px`,
          width: `${spriteWidth}px`,
          height: `${spriteHeight}px`,
          transform: facing === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
          transformOrigin: 'center'
        }}
      >
        {renderFrame()}
      </div>
    </div>
  );
}