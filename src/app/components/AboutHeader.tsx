import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../contexts/ThemeContext';
import { ShadertoyWaterEffect } from './ShadertoyWaterEffect';
import AboutHeader01 from './Files/AboutHeader01.png';
import AboutHeader02 from './Files/AboutHeader02.png';

export function AboutHeader() {
  const theme = useTheme();

  // Choose background image based on color scheme
  const backgroundImage = theme.colorScheme === 'orange-red'
    ?AboutHeader01
    : AboutHeader02;

  return (
    <div className="relative w-full h-80 md:h-96">
            {/* Ripple Effect Overlay */}
      <div className="absolute inset-0 pointer-events-auto">
        <ShadertoyWaterEffect
          imageUrl={backgroundImage}
          waveSpeed={1.0}
          springStrength={0.008}
          velocityDamping={0.005}
          pressureDamping={0.99}
          distortionStrength={0.2}
          rippleSize={20.0}
          rippleStrength={1.0}
          chromaticAberrationStrength={0}
          chromaticAberrationDispersal={0.01}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: theme.darkMode === 'dark'
            ? 'linear-gradient(to bottom, transparent, transparent, rgba(0, 0, 0, 0.5))'
            : 'linear-gradient(to bottom, transparent, transparent, rgba(255, 255, 255, 0.3))',
        }}
      />
    </div>
  );
}