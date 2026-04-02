import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import { SpriteFollower } from "../components/SpriteFollower";
import { ghostSprite } from "../components/sprites";
import { OtherProjects } from "./OtherProjects";
import graveyard from "../components/Files/graveyard.png";
import gameNite_Dark from "../components/Files/gameNite_Dark.png";
import gameNite_light from "../components/Files/gameNite_light.png";
import trainBoard from "../components/Files/trainBoard.png";
import trainSheet from "../components/Files/trainSheet.png";
import videoShadows from "../components/Files/videoShadows.mp4";
import videoEnvironment from "../components/Files/videoEnvironment.mp4";


import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const medias = [
  {
    media: trainBoard,
    title: "Board Game",
    description: "a board game",
    pageLink: undefined,
    seeMore: trainSheet,
  },
  {
    media: videoShadows,
    title: "Animation",
    description: "short animation that loops",
    pageLink: undefined,
    seeMore: undefined,
  },

  {
    media: videoEnvironment,
    title: "3D Environment",
    description: "file.obj a spinning file",
    pageLink: undefined,
    seeMore: undefined,
  },
];

const currentProjects = [
  {
    title: "GameNite Website",
    description:
      "A multiplayer gaming hub where users create profiles, track progress, share achievements, compete in daily challenges, access generated games, view leaderboards, participate in forums, and engage with a dynamic community.",
    description2:
      "Built with Node.js, TypeScript, and MongoDB, featuring server-client separation, APIs, WebSockets for real-time multiplayer, procedural game generation, secure authentication, modular frontend, and dynamic state tracking for scalability and interactivity.",

    image: gameNite_light,
    imageDark: gameNite_Dark,
    tags: [
      "React",
      "Node.js",
      "TypeScript",
      "Vite",
      "zod",
      "Mongodb",
    ],
    github: undefined,
    demo: undefined,
  },
  {
    title: "Virtual Reality Experiance",
    description:
      "A VR journey retelling a life story through items left at gravestones, navigating a cosmic graveyard, floating through time and space, exploring the narative.",
    description2:
      "Creating in Unity with VR interaction systems, spatial storytelling, 3D environment design, and art-driven narrative cues, collaborating closely with a team to shape the immersive experience.",
    image: graveyard,
    tags: ["Unity", "Maya"],
    github: undefined,
    demo: undefined,
  },

  {
    title: "Other Projects",
    projects: medias,
    image:
      "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3Mzk4NzEyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOther: true,
  },
];

export function CurrentProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const theme = useTheme();

 
  useEffect(() => {
    if (isPaused) return;

    // Stop carousel when hovering over "Other Projects"
    if (isHovering && currentProjects[currentIndex].isOther) {
      return;
    }

    // Slower interval when hovering over regular projects
    const intervalTime = isHovering ? 8000 : 5000;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % currentProjects.length,
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPaused, isHovering, currentIndex]);

  const handlePrevious = () => {
    setIsPaused(true);
    setCurrentIndex(
      (prev) =>
        (prev - 1 + currentProjects.length) %
        currentProjects.length,
    );
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex(
      (prev) => (prev + 1) % currentProjects.length,
    );
    setTimeout(() => setIsPaused(false), 10000);
  };

  const currentProject = currentProjects[currentIndex];

  return (
    <section
      id="current-projects"
      style={{ background: theme.sectionBgGradientReverse }}
      className="pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 leading-normal overflow-visible">
          <h2
            className="text-4xl font-bold inline-block leading-normal overflow-visible"
            style={{
              backgroundImage: theme.headingGradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Current Projects
          </h2>
        </div>

        <div className="relative">
          {currentProject.isOther ? (
            <div
              className={`${theme.bg} rounded-lg overflow-hidden border ${theme.border} shadow-2xl`}
              style={{
                boxShadow:
                  theme.glowOpacity > 0
                    ? `0 20px 60px ${theme.primaryRgb
                        .replace("rgb", "rgba")
                        .replace(")", ", 0.2)")}`
                    : "none",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <OtherProjects
                currentProject={currentProject}
                theme={theme}
              />
            </div>
          ) : (
            // --- Normal layout for other projects ---
            <div
              className={`${theme.bg} rounded-lg overflow-hidden border ${theme.border} shadow-2xl`}
              style={{
                boxShadow:
                  theme.glowOpacity > 0
                    ? `0 20px 60px ${theme.primaryRgb
                        .replace("rgb", "rgba")
                        .replace(")", ", 0.2)")}`
                    : "none",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="grid md:grid-cols-2 md:h-[500px]">
                <ImageWithFallback
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-64 md:h-[500px] object-cover"
                />
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-3xl font-bold mb-4"
                      style={{ color: theme.primaryRgb }}
                    >
                      {currentProject.title}
                    </h3>
                    <p
                      className={`${theme.textOpacity} mb-6 text-lg`}
                    >
                      {currentProject.description}
                    </p>
                    {currentProject.description2 && (
                      <p
                        className={`${theme.textOpacity} mb-6 text-lg`}
                      >
                        {currentProject.description2}
                      </p>
                    )}
                    {currentProject.tags &&
                      currentProject.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {currentProject.tags.map(
                            (tag, index) => (
                              <span
                                key={index}
                                className={`px-4 py-2 rounded-full border ${theme.border}`}
                                style={{
                                  background: `linear-gradient(135deg, ${theme.primary500Rgb
                                    .replace("rgb", "rgba")
                                    .replace(
                                      ")",
                                      ", 0.1)",
                                    )}, ${theme.secondary500Rgb
                                    .replace("rgb", "rgba")
                                    .replace(")", ", 0.1)")})`,
                                  color: theme.primaryRgb,
                                }}
                              >
                                {tag}
                              </span>
                            ),
                          )}
                        </div>
                      )}
                  </div>
                  <div className="flex gap-4">
                    {currentProject.github && (
                      <Button
                        size="lg"
                        variant="outline"
                        className={`${theme.border}`}
                        asChild
                      >
                        <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" size={20} />
                          View Code
                        </a>
                      </Button>
                    )}
                    {currentProject.demo && (
                      <Button
                        size="lg"
                        variant="outline"
                        className={`${theme.border}`}
                        asChild
                      >
                        <a href={currentProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink
                            className="mr-2"
                            size={20}
                          />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-0 z-0 rounded-lg"
                style={{
                  background: theme.cardGradient,
                  filter: theme.glowOpacity > 0 ? "blur(20px)" : "none",
                  opacity: theme.glowOpacity > 0 ? 0.6 : 0,
                }}
              />
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full border transition-all"
            style={{
              backgroundColor: theme.buttonBgColor,
              borderColor: theme.buttonBorderColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                theme.buttonBgHoverColor;
              e.currentTarget.style.borderColor =
                theme.buttonBorderHoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                theme.buttonBgColor;
              e.currentTarget.style.borderColor =
                theme.buttonBorderColor;
            }}
          >
            <ChevronLeft
              size={24}
              style={{ color: theme.primaryRgb }}
            />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full border transition-all"
            style={{
              backgroundColor: theme.buttonBgColor,
              borderColor: theme.buttonBorderColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                theme.buttonBgHoverColor;
              e.currentTarget.style.borderColor =
                theme.buttonBorderHoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                theme.buttonBgColor;
              e.currentTarget.style.borderColor =
                theme.buttonBorderColor;
            }}
          >
            <ChevronRight
              size={24}
              style={{ color: theme.primaryRgb }}
            />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {currentProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className="w-3 h-3 rounded-full transition-all"
                style={{
                  backgroundColor:
                    index === currentIndex
                      ? theme.primaryRgb
                      : theme.darkMode === "dark"
                        ? "rgba(156, 163, 175, 0.3)"
                        : "rgba(107, 114, 128, 0.3)",
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative w-full mx-auto h-60">
          <SpriteFollower spriteSet={ghostSprite} />
        </div>
      </div>
    </section>
  );
}