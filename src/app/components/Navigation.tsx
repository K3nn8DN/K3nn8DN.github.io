import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuPortal,
} from "./ui/dropdown-menu";
import { ToggleRow } from "./ToggleRow";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    setColorScheme,
    setDarkMode,
    setThemeMode,
    toggleDarkMode,
  } = theme;

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleAboutClick = () => {
    if (isAboutPage) scrollToSection("about");
    else navigate("/about");
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${theme.bg} backdrop-blur-sm shadow-lg ${theme.themeMode === 'game' ? theme.shadow : ''}`
          : "bg-transparent"
      }`}style={{
        backgroundColor: theme.blackWhite,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-semibold transition-all"
            style={{
              color: theme.primaryRgb,
              textShadow: theme.themeMode === 'game' ? `0 0 20px ${theme.glowColor}, 0 0 40px ${theme.glowColor}` : 'none',
            }}
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`p-2.5 rounded-lg transition-all ${theme.text} border`}
                  style={{
                    backgroundColor: theme.buttonBgColor,
                    borderColor: theme.buttonBorderColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.buttonBgHoverColor;
                    e.currentTarget.style.borderColor = theme.buttonBorderHoverColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.buttonBgColor;
                    e.currentTarget.style.borderColor = theme.buttonBorderColor;
                  }}
                >
                  <Palette
                    size={18}
                    style={{
                      color: theme.portfolioColor,
                    }}
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuPortal>
                <DropdownMenuContent
                  className="z-[9999] w-64 p-3 space-y-3  rounded-lg shadow-xl"
                  style={{
                    backgroundColor: theme.bgColor,
                    borderColor: theme.colorBorder,
                  }}
                >
                  <ToggleRow
                    left="Dark🌙"
                    right="Light☀️"
                    isRight={theme.darkMode === "light"}
                    onToggle={(val) =>
                      setDarkMode(val ? "light" : "dark")
                    }
                  />

                  <ToggleRow
                    left="Green🍃"
                    right="Orange🍂"
                    isRight={theme.colorScheme === "orange-red"}
                    onToggle={(val) =>
                      setColorScheme(
                        val ? "orange-red" : "green-cyan",
                      )
                    }
                  />

                  <ToggleRow
                    left="Cozy☕"
                    right="Neon 🎮"
                    isRight={theme.themeMode === "game"}
                    onToggle={(val) =>
                      setThemeMode(val ? "game" : "cozy")
                    }
                  />
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>

            <button
              onClick={handleAboutClick}
              className={`${theme.textGray} ${theme.hover} transition-colors`}
            >
              About
            </button>

            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`${theme.textGray} ${theme.hover} transition-colors`}
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`${theme.textGray} ${theme.hover} transition-colors`}
                >
                  Projects
                </button>
                <button
                  onClick={() =>
                    scrollToSection("current-projects")
                  }
                  className={`${theme.textGray} ${theme.hover} transition-colors`}
                >
                  Current Projects
                </button>
              </>
            )}

            {isAboutPage && (
              <button
                onClick={() => scrollToSection("contact")}
                className={`${theme.textGray} ${theme.hover} transition-colors`}
              >
                Contact
              </button>
            )}
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`p-2.5 rounded-lg transition-all ${theme.text} border`}
                  style={{
                    backgroundColor: theme.buttonBgColor,
                    borderColor: theme.buttonBorderColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.buttonBgHoverColor;
                    e.currentTarget.style.borderColor = theme.buttonBorderHoverColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.buttonBgColor;
                    e.currentTarget.style.borderColor = theme.buttonBorderColor;
                  }}
                >
                  <Palette
                    size={18}
                    style={{
                      color: theme.portfolioColor,
                    }}
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuPortal>
                <DropdownMenuContent
                  className="z-[9999] w-64 p-3 space-y-3 rounded-lg shadow-xl"
                  style={{
                    backgroundColor: theme.bgColor,
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                  }}
                >
                  <ToggleRow
                    left="Dark🌙"
                    right="Light☀️"
                    isRight={theme.darkMode === "light"}
                    onToggle={(val) =>
                      setDarkMode(val ? "light" : "dark")
                    }
                  />
                  <ToggleRow
                    left="Green🍃"
                    right="Orange🍂"
                    isRight={theme.colorScheme === "orange-red"}
                    onToggle={(val) =>
                      setColorScheme(
                        val ? "orange-red" : "green-cyan",
                      )
                    }
                  />
                  <ToggleRow
                    left="Cozy☕"
                    right="Game 🎮"
                    isRight={theme.themeMode === "game"}
                    onToggle={(val) =>
                      setThemeMode(val ? "game" : "cozy")
                    }
                  />
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className={`${theme.text} ${theme.bgHover}`}
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden ${theme.bg} backdrop-blur-sm border-t ${theme.border}`}
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={handleAboutClick}
              className={`block w-full text-left ${theme.text} ${theme.hover} py-2`}
            >
              About
            </button>
            {isHomePage && (
              <>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`block w-full text-left ${theme.text} ${theme.hover} py-2`}
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`block w-full text-left ${theme.text} ${theme.hover} py-2`}
                >
                  Projects
                </button>
                <button
                  onClick={() =>
                    scrollToSection("current-projects")
                  }
                  className={`block w-full text-left ${theme.text} ${theme.hover} py-2`}
                >
                  Current Projects
                </button>
              </>
            )}
            {isAboutPage && (
              <button
                onClick={() => scrollToSection("contact")}
                className={`block w-full text-left ${theme.text} ${theme.hover} py-2`}
              >
                Contact
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}