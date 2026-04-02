import { motion } from "motion/react";
import { Wrench, ArrowLeft, Eye } from "lucide-react";
import { useNavigate } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function ComingSoonContent() {
  const navigate = useNavigate();
  const {
    bg,
    text,
    textOpacity,
    border,
    primary,
    secondary,
    bgHover,
    primaryRgb,
    secondaryRgb,
  } = useTheme();

  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate random bubbles
    const newBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setBubbles(newBubbles);
  }, []);

  const handleReturn = () => {
    navigate(-1);
  };

  const handlePreview = () => {
    navigate('/games');
  };

  return (
    <div
      className={`relative min-h-screen ${bg} ${text} flex items-center justify-center overflow-hidden`}
    >
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full border-2 opacity-20"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              borderColor: primaryRgb,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              y: [0, -30, 0],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Animated Wrench Icon */}
        <motion.div
          className="flex justify-center mb-8"
          animate={{
            rotate: [0, -15, 15, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Wrench
              className="w-24 h-24 md:w-32 md:h-32"
              style={{ color: primaryRgb }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl opacity-50"
              style={{ backgroundColor: primaryRgb }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Coming Soon Text */}
        <motion.h1
          className="text-5xl md:text-7xl font-[Aclonica] mb-4 bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${primaryRgb}, ${secondaryRgb})`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Coming Soon
        </motion.h1>

        <motion.p
          className={`text-lg md:text-xl ${textOpacity} mb-12`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We're working hard to bring you something amazing. Stay tuned!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Return Button */}
          <button
            onClick={handleReturn}
            className={`flex items-center gap-2 px-8 py-4 ${bgHover} border ${border} rounded-lg transition-all ${text} hover:scale-105 font-[Aclonica]`}
          >
            <ArrowLeft className="w-5 h-5" />
            Return
          </button>

          {/* Preview Game Zone Button */}
          <button
            onClick={handlePreview}
            className={`flex items-center gap-2 px-8 py-4 rounded-lg transition-all text-white hover:scale-105 font-[Aclonica]`}
            style={{
              backgroundImage: `linear-gradient(to right, ${primaryRgb}, ${secondaryRgb})`,
            }}
          >
            <Eye className="w-5 h-5" />
            Preview
          </button>
        </motion.div>

        
      </div>
      {/* Animated Popping Bubbles at bottom */}
        <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="rounded-full"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: secondaryRgb,
              }}
              animate={{
                y: [0, -100],
                scale: [1, 1.5, 0],
                opacity: [0.8, 0.5, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
    </div>
  );
}

export function ComingSoon() {
  return <ComingSoonContent />;
}