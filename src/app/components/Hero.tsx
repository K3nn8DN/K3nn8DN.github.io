import { ArrowDown, Sparkles, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';
import { motion, useScroll, useTransform } from 'motion/react';

export function Hero() {
  const navigate = useNavigate();
  const theme = useTheme();

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 1200], [0, 400]);
  const yStars = useTransform(scrollY, [0, 1200], [0, 150]);

  const goToContact = () => {
    navigate('/about#contact');
  };

  // Generate sparkle positions
  const sparkles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2,
  }));

  // Background image changes based on theme mode - scattered nebula for game mode
  const backgroundImage = theme.themeMode === 'cozy'
    ? 'https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80'
    : 'https://images.unsplash.com/photo-1581840130788-0c20b3d547c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBnYWxheHklMjBwdXJwbGUlMjBzdGFycyUyMHNjYXR0ZXJlZHxlbnwxfHx8fDE3NzQ4NTE3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  const SparkleIcon = theme.themeMode === 'cozy' ? Star : Sparkles;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Multi-layer Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background: theme.heroBgGradient
          }}
        />
        <motion.div
          style={{ y: yBackground }}
          className="absolute inset-0 bg-cover bg-center h-[120vh]"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              opacity: theme.backgroundImageOpacity,
            }}
          />
        </motion.div>
      </div>

      {/* Animated Sparkles/Particles with parallax */}
      <motion.div 
        style={{ y: yStars }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        {sparkles.map((sparkle) => {
          return (
            <div
              key={sparkle.id}
              className="absolute animate-sparkle animate-float"
              style={{
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,
                animationDelay: `${sparkle.delay}s`,
                animationDuration: `${sparkle.duration}s`,
              }}
            >
              <div className="relative">
                <SparkleIcon
                  style={{ color: theme.primaryRgb, opacity: theme.sparkleOpacity }}
                  size={12 + Math.random() * 8}
                />
                <div className="absolute inset-0 blur-sm">
                  <SparkleIcon
                    style={{ color: theme.secondaryRgb, opacity: 0.2 }}
                    size={12 + Math.random() * 8}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Animated gradient orbs */}
      {theme.themeMode === 'game' && (
        <>
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl z-5"
            style={{
              backgroundColor: theme.primary500Rgb,
              opacity: theme.glowOpacity,
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl z-5"
            style={{
              backgroundColor: theme.secondary500Rgb,
              opacity: theme.glowOpacity,
            }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-20">
        <div className="space-y-6">
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-8 ${theme.text}`}>
            Hi, I'm{' '}
            <span
              style={{
                backgroundImage: theme.headingGradient,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Kae Strange
            </span>
          </h1>
          <p className={`text-xl sm:text-2xl max-w-3xl mx-auto ${theme.text}`}>
            Game Designer & AI Engineer
          </p>
          <p className={`text-lg max-w-2xl mx-auto ${theme.textOpacity}`}>
            
Building dynamic game worlds, intelligent NPCs, and functional web applications with clean, user-focused design.
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Button
              size="lg"
              onClick={goToContact}
              style={{
                background: theme.buttonGradient,
              }}
              className="hover:opacity-90 transition-opacity text-white"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              style={{
                borderColor: theme.primaryRgb,
                color: theme.primaryRgb,
              }}
              className="bg-transparent hover:opacity-80 transition-opacity"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Work
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown style={{ color: theme.primary500Rgb, opacity: theme.borderOpacity }} size={32} />
      </div>
    </section>
  );
}