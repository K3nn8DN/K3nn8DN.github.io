import {
  ArrowLeft,
  User,
  Mail,
  Calendar,
  Edit2,
  Check,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTheme, ThemeProvider } from "../contexts/ThemeContext";
import { useNavigate } from "react-router";

interface Game {
  id: number;
  title: string;
  imageUrl: string;
  isMobile: boolean;
}

interface ProfilePageProps {
  onBack: () => void;
  allGames: Game[];
}

const backgroundOptions = [
  { name: "Transparent", color: "transparent", isImage: false },
  { name: "Cozy Pink", color: "#FFB6C1", isImage: false },
  { name: "Soft Purple", color: "#D8B5E3", isImage: false },
  { name: "Mint Green", color: "#B5E7D3", isImage: false },
  { name: "Peach", color: "#FFD4B2", isImage: false },
  { name: "Sky Blue", color: "#B5D8E7", isImage: false },
  { name: "Lavender", color: "#E6D5F5", isImage: false },
  { name: "Coral", color: "#FFB499", isImage: false },
  { name: "Lemon", color: "#FFF4B2", isImage: false },
  { name: "Gradient 1", color: 'https://images.unsplash.com/photo-1673526759317-be71a1243e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzQyMjc3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', isImage: true },
  { name: "Gradient 2", color: 'https://images.unsplash.com/photo-1673526759319-57811d44b600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzQyMjc3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', isImage: true },
  { name: "Gradient 3", color: 'https://images.unsplash.com/photo-1673526759337-c4d4c4c8bc72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzQyMjc3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', isImage: true },
  { name: "Gradient 4", color: 'https://images.unsplash.com/photo-1673526759321-3b3da765ffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzQyMjc3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', isImage: true },
  { name: "Gradient 5", color: 'https://images.unsplash.com/photo-1673526759349-50f6a23fac25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzQyMjc3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', isImage: true },
  { name: "Gradient 6", color: 'https://images.unsplash.com/photo-1673526759313-3c1f73913b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzQyMjc3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', isImage: true },
  { name: "Gradient 7", color: 'https://images.unsplash.com/photo-1673526759319-21aec0e17ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzQyMjc3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', isImage: true },
  { name: "Gradient 8", color: 'https://images.unsplash.com/photo-1673526759322-2b43a11d75fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBncmFkaWVudHxlbnwxfHx8fDE3NzQyMjc3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', isImage: true },
];
const avatarOptions = [
  "https://images.unsplash.com/photo-1772371272167-0117a6573d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhdmF0YXIlMjBwcm9maWxlfGVufDF8fHx8MTc3NDIyNzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1772371272174-392cf9cfabae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhdmF0YXIlMjBwcm9maWxlfGVufDF8fHx8MTc3NDIyNzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1772371272206-0525c3183ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhdmF0YXIlMjBwcm9maWxlfGVufDF8fHx8MTc3NDIyNzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1772371272179-3ecc656fc677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhdmF0YXIlMjBwcm9maWxlfGVufDF8fHx8MTc3NDIyNzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1772371272208-412168748f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxhdmF0YXIlMjBwcm9maWxlfGVufDF8fHx8MTc3NDIyNzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1772371272141-0fbd644b65c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxhdmF0YXIlMjBwcm9maWxlfGVufDF8fHx8MTc3NDIyNzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
];

// Default games data
const allGamesData: Game[] = [
  {
    id: 1,
    title: 'Nebula Warriors',
    imageUrl: 'https://images.unsplash.com/photo-1504812333783-63b845853c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMHN0YXJzJTIwZ2FsYXh5fGVufDF8fHx8MTc3NDcwMTUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    isMobile: false
  },
  {
    id: 2,
    title: 'Cosmic Explorer',
    imageUrl: 'https://images.unsplash.com/photo-1679615845580-8691c78fd7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBzdGFycyUyMHVuaXZlcnNlfGVufDF8fHx8MTc3NDc2MDUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    isMobile: false
  },
  {
    id: 3,
    title: 'Astro Command',
    imageUrl: 'https://images.unsplash.com/photo-1768005419000-d53e45851b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBmbG9hdGluZyUyMHNwYWNlfGVufDF8fHx8MTc3NDczNzkxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    isMobile: false
  },
  {
    id: 4,
    title: 'Alien Frontiers',
    imageUrl: 'https://images.unsplash.com/photo-1770699197239-81b5da579f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGllbiUyMHBsYW5ldCUyMHN1cmZhY2V8ZW58MXx8fHwxNzc0NzYwNTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    isMobile: false
  },
  {
    id: 5,
    title: 'Station Zero',
    imageUrl: 'https://images.unsplash.com/photo-1614314007212-0257d6e2f7d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXRpb24lMjBvcmJpdHxlbnwxfHx8fDE3NzQ2OTYwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isMobile: false
  },
  {
    id: 6,
    title: 'Rocket League Odyssey',
    imageUrl: 'https://images.unsplash.com/photo-1710526557312-8dcd7e8b779e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBmaXJlfGVufDF8fHx8MTc3NDc2MDUzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    isMobile: false
  },
];

function ProfilePageContent() {
  const navigate = useNavigate();
  const {
    bg,
    text,
    textOpacity,
    border,
    primary,
    secondary,
    bgHover,
  } = useTheme();

  const [editMode, setEditMode] = useState(false);
  const [editingComponent, setEditingComponent] = useState<
    "avatar" | "background" | "favorites" | null
  >(null);
  const [selectedAvatar, setSelectedAvatar] = useState<
    string | null
  >(null);
  const [selectedBackground, setSelectedBackground] = useState<
    string | null
  >(null);
  const [favoriteGameIds, setFavoriteGameIds] = useState<
    number[]
  >([1, 2, 3, 4]);
  const [username, setUsername] = useState("Game Player");
  const [email, setEmail] = useState("player@gamespace.com");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  const favoriteGames = allGamesData.filter((game) =>
    favoriteGameIds.includes(game.id),
  );

  const toggleFavoriteGame = (gameId: number) => {
    if (favoriteGameIds.includes(gameId)) {
      setFavoriteGameIds(
        favoriteGameIds.filter((id) => id !== gameId),
      );
    } else if (favoriteGameIds.length < 4) {
      setFavoriteGameIds([...favoriteGameIds, gameId]);
    }
  };

  // Helper function to get background style
  const getBackgroundStyle = () => {
    if (!selectedBackground || selectedBackground === 'default') {
      return {
        backgroundImage: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }
    
    if (selectedBackground === 'transparent') {
      return {
        backgroundColor: "transparent",
      };
    }

    // Check if it's an image URL
    const selectedOption = backgroundOptions.find(opt => opt.color === selectedBackground);
    if (selectedOption?.isImage) {
      return {
        backgroundImage: `url(${selectedBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }

    // Otherwise it's a solid color
    return {
      backgroundColor: selectedBackground,
    };
  };

  return (
    <div className={`min-h-screen ${bg} ${text}`}>
      {/* Animated Background Stars */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-2 h-2 ${primary} rounded-full animate-pulse`} />
          <div className={`absolute top-40 right-20 w-1 h-1 ${secondary} rounded-full animate-pulse`} />
          <div className={`absolute top-60 left-1/4 w-1.5 h-1.5 ${primary} rounded-full animate-pulse`} />
          <div className={`absolute bottom-40 right-1/3 w-2 h-2 ${secondary} rounded-full animate-pulse`} />
          <div className={`absolute top-1/3 right-10 w-1 h-1 ${primary} rounded-full animate-pulse`} />
          <div className={`absolute bottom-20 left-1/2 w-1.5 h-1.5 ${secondary} rounded-full animate-pulse`} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/games')}
            className={`flex items-center gap-2 ${primary} hover:opacity-80 transition-colors`}
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>

          <button
            onClick={() => {
              setEditMode(!editMode);
              setEditingComponent(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${bgHover} border ${border} ${text} hover:opacity-80 transition-all`}
          >
            {editMode ? (
              <Check className="h-4 w-4" />
            ) : (
              <Edit2 className="h-4 w-4" />
            )}
            {editMode ? "Done" : "Edit Profile"}
          </button>
        </div>

        {/* Mobile Edit Panel (Top Bar) */}
        {isMobile && editMode && editingComponent && (
          <div className={`fixed inset-x-0 top-0 z-50 ${bg} backdrop-blur-lg border-b ${border} shadow-lg animate-in slide-in-from-top`}>
            <div className="px-4 py-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm">
                  {editingComponent === "avatar" &&
                    "Choose Avatar"}
                  {editingComponent === "background" &&
                    "Choose Background"}
                  {editingComponent === "favorites" &&
                    "Select Favorite Games"}
                </h3>
                <button
                  onClick={() => setEditingComponent(null)}
                  className={`p-1.5 ${bgHover} rounded-lg transition-colors`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="overflow-x-auto pb-2 -mx-4 px-4">
                <div className="flex gap-2 min-w-min">
                  {editingComponent === "avatar" &&
                    avatarOptions.map((url, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedAvatar(url);
                          setEditingComponent(null);
                        }}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedAvatar === url
                            ? "border-primary ring-2 ring-primary/50"
                            : "border-transparent hover:border-muted-foreground/50"
                        }`}
                      >
                        <ImageWithFallback
                          src={url}
                          alt={`Avatar ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}

                  {editingComponent === "background" &&
                    backgroundOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedBackground(option.color);
                          setEditingComponent(null);
                        }}
                        className={`flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden border-2 transition-all relative flex items-center justify-center ${
                          selectedBackground === option.color
                            ? "border-primary ring-2 ring-primary/50"
                            : "border-transparent hover:border-muted-foreground/50"
                        }`}
                      >
                        {option.isImage ? (
                          <ImageWithFallback
                            src={option.color}
                            alt={option.name}
                            className="w-full h-full object-cover absolute inset-0"
                          />
                        ) : (
                          <div 
                            className="absolute inset-0"
                            style={{ backgroundColor: option.color }}
                          />
                        )}
                        <p className="text-center text-sm font-bold relative z-10 drop-shadow-lg">
                          {option.name}
                        </p>
                      </button>
                    ))}

                  {editingComponent === "favorites" &&
                    allGamesData.map((game) => (
                      <button
                        key={game.id}
                        onClick={() =>
                          toggleFavoriteGame(game.id)
                        }
                        disabled={
                          !favoriteGameIds.includes(game.id) &&
                          favoriteGameIds.length >= 4
                        }
                        className={`flex-shrink-0 w-24 flex flex-col gap-1 p-2 rounded-lg border-2 transition-all ${
                          favoriteGameIds.includes(game.id)
                            ? "border-primary bg-primary/10"
                            : favoriteGameIds.length >= 4
                              ? "border-transparent bg-muted/50 opacity-50 cursor-not-allowed"
                              : "border-transparent bg-muted hover:border-muted-foreground/50"
                        }`}
                      >
                        <ImageWithFallback
                          src={game.imageUrl}
                          alt={game.title}
                          className="w-full aspect-square object-cover rounded"
                        />
                        <span className="text-xs text-left truncate">
                          {game.title}
                        </span>
                        {favoriteGameIds.includes(game.id) && (
                          <Check className="h-3 w-3 text-primary self-center" />
                        )}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-6">
          <div
            className={`flex-1 ${!isMobile ? "max-w-2xl mx-auto" : ""}`}
          >
            <div className="flex flex-col items-center">
              <div
                className={`relative mb-6 rounded-3xl p-8 w-full ${editMode ? "cursor-pointer ring-2 ring-primary/50 hover:ring-primary transition-all" : ""}`}
                style={getBackgroundStyle()}
                onClick={() =>
                  editMode && setEditingComponent("background")
                }
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`h-32 w-32 rounded-full bg-muted overflow-hidden flex items-center justify-center mb-4 ${editMode ? "cursor-pointer ring-2 ring-primary-foreground hover:ring-4 transition-all" : ""}`}
                    onClick={(e) => {
                      if (editMode) {
                        e.stopPropagation();
                        setEditingComponent("avatar");
                      }
                    }}
                  >
                    {selectedAvatar ? (
                      <ImageWithFallback
                        src={selectedAvatar}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <User className="h-16 w-16 text-muted-foreground" />
                    )}
                  </div>

                  {editMode ? (
                    <input
                      type="text"
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value)
                      }
                      className="mb-2 text-center bg-background/80 backdrop-blur-sm border border-primary-foreground/30 rounded px-3 py-1 text-xl font-semibold"
                      placeholder="Enter name"
                    />
                  ) : (
                    <h1 className="mb-2 text-primary-foreground drop-shadow-lg">
                      {username}
                    </h1>
                  )}
                  <p className="text-primary-foreground/80 drop-shadow-md mb-2">
                    Level 42 Gamer
                  </p>
                </div>
              </div>

              <div className={`w-full ${bgHover} backdrop-blur-sm border ${border} rounded-lg p-6 space-y-4`}>
                <div className="flex items-center gap-3">
                  <Mail className={`h-5 w-5 ${primary}`} />
                  <div className="flex-1">
                    <p className={`text-sm ${textOpacity}`}>
                      Email
                    </p>
                    {editMode ? (
                      <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        className={`w-full ${bgHover} border ${border} rounded px-2 py-1 mt-1 ${text}`}
                        placeholder="Enter email"
                      />
                    ) : (
                      <p>{email}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className={`h-5 w-5 ${primary}`} />
                  <div>
                    <p className={`text-sm ${textOpacity}`}>
                      Member Since
                    </p>
                    <p>January 2024</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <User className={`h-5 w-5 ${primary}`} />
                  <div>
                    <p className={`text-sm ${textOpacity}`}>
                      Games Played
                    </p>
                    <p>127</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 w-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className={`text-xl ${primary}`}>Favorite Games</h2>
                  {editMode && (
                    <button
                      onClick={() =>
                        setEditingComponent("favorites")
                      }
                      className={`text-sm ${secondary} hover:opacity-80 transition-colors`}
                    >
                      Select Games ({favoriteGameIds.length}/4)
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {favoriteGames.map((game) => (
                    <div
                      key={game.id}
                      className={`${bgHover} backdrop-blur-sm border ${border} rounded-lg overflow-hidden hover:opacity-90 transition-all`}
                    >
                      <ImageWithFallback
                        src={game.imageUrl}
                        alt={game.title}
                        className="w-full aspect-square object-cover"
                      />
                      <p className="p-3 text-center">
                        {game.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Edit Panel (Sidebar) */}
          {!isMobile && editMode && editingComponent && (
            <div className={`w-80 ${bgHover} border ${border} rounded-lg p-6 h-fit sticky top-24`}>
              <h3 className="mb-4">
                {editingComponent === "avatar" &&
                  "Choose Avatar"}
                {editingComponent === "background" &&
                  "Choose Background"}
                {editingComponent === "favorites" &&
                  "Select Favorite Games"}
              </h3>

              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {editingComponent === "avatar" &&
                  avatarOptions.map((url, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAvatar(url)}
                      className={`w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedAvatar === url
                          ? "border-primary ring-2 ring-primary/50"
                          : "border-transparent hover:border-muted-foreground/50"
                      }`}
                    >
                      <ImageWithFallback
                        src={url}
                        alt={`Avatar ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}

                {editingComponent === "background" &&
                  backgroundOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setSelectedBackground(option.color)
                      }
                      className={`w-full aspect-video rounded-lg overflow-hidden border-2 transition-all relative flex items-center justify-center ${
                        selectedBackground === option.color
                          ? "border-primary ring-2 ring-primary/50"
                          : "border-transparent hover:border-muted-foreground/50"
                      }`}
                    >
                      {option.isImage ? (
                        <ImageWithFallback
                          src={option.color}
                          alt={option.name}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      ) : (
                        <div 
                          className="absolute inset-0"
                          style={{ backgroundColor: option.color }}
                        />
                      )}
                      <p className="text-center text-sm font-bold relative z-10 drop-shadow-lg">
                        {option.name}
                      </p>
                    </button>
                  ))}

                {editingComponent === "favorites" &&
                  allGamesData.map((game) => (
                    <button
                      key={game.id}
                      onClick={() =>
                        toggleFavoriteGame(game.id)
                      }
                      disabled={
                        !favoriteGameIds.includes(game.id) &&
                        favoriteGameIds.length >= 4
                      }
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                        favoriteGameIds.includes(game.id)
                          ? "border-primary bg-primary/10"
                          : favoriteGameIds.length >= 4
                            ? "border-transparent bg-muted/50 opacity-50 cursor-not-allowed"
                            : "border-transparent bg-muted hover:border-muted-foreground/50"
                      }`}
                    >
                      <ImageWithFallback
                        src={game.imageUrl}
                        alt={game.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span className="flex-1 text-left">
                        {game.title}
                      </span>
                      {favoriteGameIds.includes(game.id) && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProfilePage() {
  return (
    <ThemeProvider>
      <ProfilePageContent />
    </ThemeProvider>
  );
}