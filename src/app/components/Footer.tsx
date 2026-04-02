import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Rocket,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router";
import resume from "./Files/KaeStrangeResume.pdf";

export function Footer() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [heartClicked, setHeartClicked] = useState(false);

  const isHomePage = location.pathname === "/";
  const isContactPage = location.pathname === "/about";

  const handleHeartClick = () => {
    setHeartClicked(true);
    setTimeout(() => setHeartClicked(false), 1000);
  };


  return (
    <footer
      className={`border-t ${theme.border}`}
      style={{
        background: theme.footerGradient,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="px-[3px] py-[0px] px-[3px] py-[1px] px-[3px] py-[2px]">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: theme.primaryRgb }}
            >
              Kae Strange
            </h3>
            <p className={theme.textOpacity}>
              Interactive Experiences Developer crafting
              intelligent systems and immersive worlds.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pt-[3px] px-[0px] py-[2px]">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: theme.primaryRgb }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/coming-soon"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/coming-soon");
                    setTimeout(() => window.scrollTo(0, 0), 0);
                  }}
                  className={`mt-4 flex items-center gap-2 ${theme.secondary} hover:opacity-80 transition-opacity no-underline  font-[Aclonica]`}
                >
                  <span className="text-[15px] text-[14px] text-[13px] p-[0px]">
                    Game Zone
                  </span>
                  <Rocket className="w-4 h-6" />
                </a>
              </li>
              {!isHomePage && (
                <li>
                  <a
                    href="/"
                    className={`${theme.textOpacity} ${theme.hoverOpacity} transition-colors`}
                  >
                    Home
                  </a>
                </li>
              )}
              {!isContactPage && (
                <li>
                  <a
                    href="/about#contact"
                    className={`${theme.textOpacity} ${theme.hoverOpacity} transition-colors`}
                  >
                    Contact
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: theme.primaryRgb }}
            >
              Connect
            </h3>
            {!isContactPage && (
              <div className="flex gap-4">
                <a
                  href="https://github.com/K3nn8DN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.secondary} hover:opacity-80 transition-opacity`}
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/kaestrange"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.secondary} hover:opacity-80 transition-opacity`}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:kae.strange@tutanota.com"
                  className={`${theme.secondary} hover:opacity-80 transition-opacity`}
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            )}

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 block ${isContactPage ? theme.secondary : theme.textOpacity} ${isContactPage ? "hover:opacity-80" : theme.hover} transition-colors`}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Border line */}
        <div className={`border-t ${theme.border}`} />
      </div>

      {/* Copyright Section - Full width */}
      <div className="relative h-16 w-full overflow-hidden mt-4 flex items-center justify-center">
        {/* Copyright Text Overlay */}
        <div className={`text-center ${theme.textMuted} px-4`}>
          <p className="flex items-center justify-center gap-2">
            Made with{" "}
            <motion.button
              className={`w-4 ${theme.primary} fill-current cursor-pointer inline-flex items-center justify-center`}
              animate={heartClicked ? { 
                scale: [1, 1.5, 1],
                rotate: [0, 15, -15, 0]
              } : { scale: 1 }}
              transition={{ 
                duration: 0.6,
                ease: "easeInOut"
              }}
              onClick={handleHeartClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart />
            </motion.button>{" "}
            by Kae Strange © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}