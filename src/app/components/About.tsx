import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../contexts/ThemeContext';
import picture from './Files/picture.jpeg';
import { useState } from 'react';

export function About() {
  const theme = useTheme();
  const [poppedBubbles, setPoppedBubbles] = useState<number[]>([]);

  const handleBubblePop = (index: number) => {
    if (theme.themeMode === 'cozy' && !poppedBubbles.includes(index)) {
      setPoppedBubbles([...poppedBubbles, index]);
      // Reset after animation
      setTimeout(() => {
        setPoppedBubbles(poppedBubbles.filter(i => i !== index));
      }, 600);
    }
  };

  const renderCheckmark = (index: number) => {
    const isPopped = poppedBubbles.includes(index);
    
    if (theme.themeMode === 'cozy') {
      // Bubble mode
      return (
        <span
          className="mr-2 inline-flex items-center justify-center cursor-pointer transition-all duration-300"
          style={{ 
            color: theme.primaryRgb,
            position: 'relative',
          }}
          onClick={() => handleBubblePop(index)}
        >
          <span
            className={`inline-flex items-center justify-center rounded-full transition-all duration-300 ${
              isPopped ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`}
            style={{
              width: '24px',
              height: '24px',
              background: `linear-gradient(135deg, ${theme.primary500Rgb.replace('rgb', 'rgba').replace(')', ', 0.3)')}, ${theme.secondary500Rgb.replace('rgb', 'rgba').replace(')', ', 0.3)')})`,
              border: `2px solid ${theme.primaryRgb}`,
            }}
          >
            ✓
          </span>
          {/* Pop particles */}
          {isPopped && (
            <>
              <span
                className="absolute animate-ping"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: theme.primaryRgb.replace('rgb', 'rgba').replace(')', ', 0.4)'),
                }}
              />
            </>
          )}
        </span>
      );
    } 
    
    // Game mode - Diamond mode with spin on hover
    return (
      <span
        className="mr-2 inline-flex items-center justify-center group"
        style={{ 
          color: theme.primaryRgb,
          perspective: '1000px',
        }}
      >
        <span
          className="inline-flex items-center justify-center transition-transform duration-500"
          style={{
            width: '10px',
            height: '10px',
            transform: 'rotate(45deg)',
            background: `linear-gradient(135deg, ${theme.primaryRgb}, ${theme.secondaryRgb})`,
            boxShadow: theme.glowOpacity > 0 ? `0 0 10px ${theme.primaryRgb.replace('rgb', 'rgba').replace(')', ', 0.6)')}` : 'none',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'rotate(45deg) rotateY(180deg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'rotate(45deg) rotateY(0deg)';
          }}
        >
        </span>
      </span>
    );
  };

  return (
    <section id="about" className="py-20" style={{ background: theme.sectionBgGradientReverse }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2
              className="text-4xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: theme.headingGradient,
              }}
            >
              About Me
            </h2>
            <p className={`text-lg ${theme.text}`}>
             I'm Kae Strange, a Computer Science major at Northeastern University, concentrating in AI with a minor in Game Design. I’m originally from Texas, and I’ve always loved figuring out how things work, whether that’s technology, games, or anything else. I’m drawn to innovation, not just in coding but in ideas, design, and problem-solving.

            </p>
            <p className={`text-lg ${theme.text}`}>
          Outside of programming, I’m a big fan of action anime, fast-paced stories, and anything that sparks creativity. I like exploring different ways to bring ideas to life, whether through digital projects or just learning something new.

            </p>
            <div
              className="p-6 rounded-lg border"
              style={{
                background: theme.cardGradient,
                borderColor: theme.buttonBorderColor,
                boxShadow: theme.glowOpacity > 0 ? `0 10px 30px ${theme.primaryRgb.replace('rgb', 'rgba').replace(')', ', 0.1)')}` : 'none',
              }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: theme.primaryRgb }}
              >
                What I Bring
              </h3>
              <ul className={`space-y-2 ${theme.textOpacity}`}>
                <li className="flex items-center">
                  {renderCheckmark(0)}
                 Intelligent behaviors and responsive systems
                </li>
                <li className="flex items-center">
                  {renderCheckmark(1)}
                  Immersive and intentional design
                </li>
                <li className="flex items-center">
                  {renderCheckmark(2)}
                 Rapid prototyping and iteration 
                </li>
                <li className="flex items-center">
                  {renderCheckmark(3)}
                  Clean structure behind complex ideas
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-lg blur-2xl"
              style={{
                background: theme.cardGradientMedium,
                opacity: theme.glowOpacity > 0 ? 1 : 0,
              }}
            />
            <ImageWithFallback
              src={picture}
              alt="Profile"
              className="relative rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}