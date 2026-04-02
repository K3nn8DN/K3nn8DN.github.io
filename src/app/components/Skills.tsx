import { Code2, Palette, Database, Smartphone, Globe, Layers, Gamepad2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const skills = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description: [
      'React, TypeScript',
      'Node.js, MongoDB, REST APIs',
      'Figma (UI/UX)',
    ],
  },
  {
    icon: Layers,
    title: 'DevOps & Tools',
    description: [
      'Git, CI/CD',
      'Vite, ESLint, Tailwind',
    ],
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: [
      'Unity, Unreal Engine',
      'Environment Design, Maya (3D Modeling)',
      'Game AI, Intelligent NPCs',
    ],
  },
];

export function Skills() {
  const theme = useTheme();

  return (
    <section id="skills" className="py-20" style={{ background: theme.sectionBgGradientReverse }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2
            className="text-4xl font-bold bg-clip-text text-transparent mb-12"
            style={{
              backgroundImage: theme.headingGradient,
            }}
          >
            Skills & Expertise
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme.textOpacity}`}>
            I'm constantly learning and expanding my skill set to stay at the
            forefront of technology.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md transition-all border group"
                style={{
                  background: theme.skillsGradient,
                  borderColor: theme.buttonBorderColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  if (theme.glowOpacity > 0) {
                    e.currentTarget.style.boxShadow = `0 20px 40px ${theme.primaryRgb.replace('rgb', 'rgba').replace(')', ', 0.3)')}`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="mb-4 p-3 rounded-lg inline-block"
                  style={{
                    background: theme.cardGradientMedium,
                  }}
                >
                  <Icon size={32} style={{ color: theme.primaryRgb }} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.primaryRgb }}
                >
                  {skill.title}
                </h3>
                <div className={`${theme.textOpacity} space-y-1`}>
                  {skill.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}