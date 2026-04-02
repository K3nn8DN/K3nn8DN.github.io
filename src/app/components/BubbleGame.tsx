import { useEffect, useState } from "react";
import {BubbleSVG} from "./BubbleSVG";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router";
import { WaterRippleEffect } from "./WaterRippleEffect";

type Bubble = {
  id: number;
  popped: boolean;
  autoPopDelay: number;
};

export default function BubbleGame({ onComplete }: { onComplete?: () => void }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [bubbles, setBubbles] = useState<Bubble[]>([
    { id: 1, popped: false, autoPopDelay: 40000 },
    { id: 2, popped: false, autoPopDelay: 600500 },
    { id: 3, popped: false, autoPopDelay: 900000 },
  ]);

  const [allPopped, setAllPopped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Auto pop
  useEffect(() => {
    bubbles.forEach((b) => {
      if (!b.popped) {
        setTimeout(() => popBubble(b.id), b.autoPopDelay);
      }
    });
  }, []);

  const popBubble = (id: number) => {
    setBubbles((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
    );
  };

  // detect all popped
  useEffect(() => {
    if (bubbles.every((b) => b.popped)) {
      setTimeout(() => {
        setAllPopped(true);
        onComplete?.();
      }, 400);
    }
  }, [bubbles]);

  const handleButtonClick = () => {
    navigate('/coming-soon');
  };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Bubbles */}
      {!allPopped &&
        bubbles.map((b, i) => (
          <BubbleSVG
            key={b.id}
            popped={b.popped}
            onClick={() => popBubble(b.id)}
            className={`absolute bubble-${i}`}
          />
        ))}

      {/* Button with Gradient Ripple or Water Ripple based on mode */}
      {allPopped && (
        <WaterRippleEffect>
          <div className="relative">
            <button 
              className="pop-button relative z-10 font-[Aclonica]"
              style={{
                background: theme.cardGradientMedium,
                borderColor: theme.primaryRgb.replace("rgb", "rgba").replace(")", ", 0.3)"),
                color: theme.text,
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={handleButtonClick}
            >
              Enter Game Zone
            </button>
            
            {/* Gradient Ripple Effect (only when NOT in cozy mode) */}
            {isHovering && theme.themeMode !== 'cozy' && (
              <>
                <div 
                  className="absolute inset-0 rounded-full animate-ripple-1"
                  style={{
                    background: theme.cardGradientHover,
                    zIndex: 0,
                  }}
                />
                <div 
                  className="absolute inset-0 rounded-full animate-ripple-2"
                  style={{
                    background: theme.cardGradientMedium,
                    zIndex: 0,
                  }}
                />
                <div 
                  className="absolute inset-0 rounded-full animate-ripple-3"
                  style={{
                    background: theme.cardGradient,
                    zIndex: 0,
                  }}
                />
              </>
            )}
          </div>
        </WaterRippleEffect>
      )}
    </div>
  );
}