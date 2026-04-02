import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import elementalBattlecinima from "./Files/ElementalBattlecinima.png";
import elementalBattlevintage from "./Files/ElementalBattlevintage.png";
import Radius01 from "./Files/radius01.png";
import Radius02 from "./Files/radius02.png";
import wizard01 from "./Files/wizard01.png";
import wizard02 from "./Files/wizard02.png";


const projects = [
  {
    title: "Adaptive Battle AI System",
    description:
      "A Python-based strategy battle game featuring a custom Q-learning AI that adapts to player strategies.",
    image: elementalBattlevintage,
    darkImage: elementalBattlecinima,
    tags: ["Python", "NumPy"],
    demo:undefined,
    github: "https://github.com/K3nn8DN/ELEMENT-BATTLE",
  },
  {
    title: "Color Radius",
    description:
      "Pebble strategy game with card effects, real-time state tracking, and dynamic grid updates.",
    image: Radius01,
    darkImage: Radius02,
    tags: ["Jave Swing", "IntelliJ"],
    demo:undefined,
    github: "https://github.com/K3nn8DN/Color-Radius",
  },
  {
    title: "Wizard Deception simulator",
    description:
      "A town simulation game with custom AI decision making and pathfinding, enabling NPCs to react dynamically to the player.",
    image: wizard01,
    darkImage: wizard02,
    tags: ["Maya"],
    demo:undefined,
  },
];

export function Projects() {
  const theme = useTheme();

  return (
    <section
      id="projects"
      className="py-20"
      style={{ background: theme.sectionBgGradient }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 ">
          <h2
            className="text-4xl font-bold  bg-clip-text text-transparent leading-normal overflow-visible"
            style={{
              backgroundImage: theme.headingGradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${theme.bg} rounded-lg overflow-hidden border ${theme.border} hover:scale-105 transition-transform duration-300`}
              style={{
                boxShadow:
                  theme.glowOpacity > 0
                    ? `0 10px 30px ${theme.primaryRgb.replace("rgb", "rgba").replace(")", ", 0.1)")}`
                    : "none",
              }}
            >
              <ImageWithFallback
                src={
                  project.darkImage &&
                  theme.themeMode === "cozy"
                    ? project.darkImage
                    : project.image
                }
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.primaryRgb }}
                >
                  {project.title}
                </h3>
                <p className={`${theme.textOpacity} mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-sm rounded-full border ${theme.border}`}
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary500Rgb.replace("rgb", "rgba").replace(")", ", 0.1)")}, ${theme.secondary500Rgb.replace("rgb", "rgba").replace(")", ", 0.1)")})`,
                        color: theme.primaryRgb,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className={theme.border}
                      onClick={() =>
                        window.open(project.github, "_blank")
                      }
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  ) : null}

                  {project.demo ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${theme.border}`}
                      onClick={() =>
                        window.open(project.demo, "_blank")
                      }
                    >
                      <ExternalLink
                        className="mr-2"
                        size={16}
                      />
                      Demo
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}