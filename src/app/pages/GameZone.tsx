import { useState } from "react";
import { motion } from "motion/react";
import { GameCard } from "../components/GameCard";
import {
  ChevronDown,
  ChevronUp,
  Rocket,
  User,
} from "lucide-react";
import {
  useTheme,
  ThemeProvider,
} from "../contexts/ThemeContext";
import { useNavigate } from "react-router";
import { SpriteFollower } from "../components/SpriteFollower";
import {
  robotSprite,
  catSprite,
  ghostSprite,
} from "../components/sprites";

// Constant game image for all games
const GAME_IMAGE = "https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBjb250cm9sbGVyJTIwbmVvbnxlbnwxfHx8fDE3NzQ4NTEyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

function GameZoneContent() {
  const [showAllGames, setShowAllGames] = useState(false);
  const [showAllAIGames, setShowAllAIGames] = useState(false);
  const navigate = useNavigate();

  const {
    bg,
    text,
    textOpacity,
    hoverOpacity,
    border,
    primary,
    secondary,
    bgHover,
    toggleDarkMode,
    darkMode,
    primaryRgb,
    secondaryRgb,
  } = useTheme();

  // Base game template
  const baseGame = {
    title: "Cosmic Adventure",
    imageUrl: GAME_IMAGE,
    genre: "Action",
    players: "1.5M+",
    isMobile: false,
  };

  // Generate 8 featured games using the same template
  const games = Array.from({ length: 8 }, (_, i) => ({
    ...baseGame,
    id: i + 1,
  }));

  // Generate 6 AI games using the same template
  const aiGames = Array.from({ length: 6 }, (_, i) => ({
    ...baseGame,
    id: i + 101,
  }));

  const displayedGames = showAllGames
    ? games
    : games.slice(0, 4);
  const displayedAIGames = showAllAIGames
    ? aiGames
    : aiGames.slice(0, 4);

  return (
    <div
      className={`relative min-h-screen ${bg} ${text} overflow-x-hidden`}
    >
      {/* Subtle Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1504812333783-63b845853c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMHN0YXJzJTIwZ2FsYXh5fGVufDF8fHx8MTc3NDcwMTUxMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Space background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b ${border} ${bg} backdrop-blur-lg`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Rocket className={`w-6 h-6 text-cyan-400`} />
            <h2
              className={`text-sm md:text-base ${textOpacity} hidden sm:block`}
            >
              Portfolio
            </h2>
            <h2
              className={`text-sm ${textOpacity} block sm:hidden`}
            >
              Game Zone
            </h2>
          </div>

          <h1
            className={`absolute left-1/2 -translate-x-1/2 text-xl font-[Aclonica] bg-clip-text text-transparent hidden sm:block`}
            style={{
              backgroundImage: `linear-gradient(to right, ${primaryRgb}, ${secondaryRgb})`,
            }}
          >
            Game Zone
          </h1>

          <div className="flex items-center gap-1">
            <button
              onClick={() => navigate("/profile")}
              className={`rounded-full p-2 ${bgHover} transition-colors`}
              aria-label="Profile"
            >
              <User className={`h-6 w-6 text-cyan-400`} />
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10">
        {/* Games Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2
                className="text-3xl md:text-4xl mb-2 font-[Aclonica]"
                style={{
                  color: primaryRgb,
                }}
              >
                Games
              </h2>
              <p className={textOpacity}>
                Browse our collection
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {displayedGames.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GameCard {...game} />
                </motion.div>
              ))}
            </div>

            {games.length > 4 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllGames(!showAllGames)}
                  className={`flex items-center gap-2 px-6 py-3 ${bgHover} border ${border} rounded-lg transition-all ${text}`}
                >
                  {showAllGames ? (
                    <>
                      Show Less{" "}
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show More{" "}
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Play Against AI Section */}
        <section className="py-4">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2
                className="text-3xl md:text-4xl mb-2 font-[Aclonica]"
                style={{
                  color: primaryRgb,
                }}
              >
                Play Against AI
              </h2>
              <p className={textOpacity}>
                Challenge intelligent opponents
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {displayedAIGames.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GameCard {...game} />
                </motion.div>
              ))}
            </div>

            {aiGames.length > 4 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() =>
                    setShowAllAIGames(!showAllAIGames)
                  }
                  className={`flex items-center gap-2 px-6 py-3 ${bgHover} border ${border} rounded-lg transition-all ${text}`}
                >
                  {showAllAIGames ? (
                    <>
                      Show Less{" "}
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show More{" "}
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Footer with Ghost Sprite */}
        <footer className={`relativeborder-t ${border} py-4`}>
          <div className="relative w-full mx-auto h-40">
            <SpriteFollower
              spriteSet={ghostSprite}
            />
          </div>

          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Rocket className={`w-4 h-4 text-cyan-400`} />
                <span className={textOpacity}>
                  © 2026 Strange Game Zone
                </span>
              </div>
              <div className={`flex gap-4 ${textOpacity}`}>
                <a
                  href="/"
                  className={`${hoverOpacity} transition-colors`}
                >
                  Portfolio
                </a>
                <a
                  href="https://github.com/K3nn8DN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${hoverOpacity} transition-colors`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function GameZone() {
  return (
    <ThemeProvider>
      <GameZoneContent />
    </ThemeProvider>
  );
}