import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,

} from "lucide-react";

import { useTheme } from "../contexts/ThemeContext";
import BubbleGame from "./BubbleGame";

export function Contact() {
  const theme = useTheme();


  return (
    <section
      id="contact"
      className="py-20"
      style={{ 
        background: theme.blackWhite,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-4xl font-bold bg-clip-text text-transparent mb-4"
              style={{
                backgroundImage: theme.headingGradient,
              }}
            >
              Get In Touch
            </h2>
            <p
              className={`text-lg mb-8 ${theme.textOpacity}`}
            >
              I'd love to hear from you!
            </p>
            
            <div className="space-y-6">
              <a
                href="mailto:kae.strange@tutanota.com"
                className={`flex items-center gap-4 transition-colors ${theme.textOpacity} ${theme.hoverOpacity}`}
              >
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: theme.cardGradient,
                  }}
                >
                  <Mail
                    size={20}
                    style={{ color: theme.primaryRgb }}
                  />
                </div>
                kae.strange@tutanota.com
              </a>
              <a
                href="https://www.linkedin.com/in/kaestrange/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 transition-colors ${theme.textOpacity} ${theme.hoverOpacity}`}
              >
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: theme.cardGradient,
                  }}
                >
                  <Linkedin
                    size={20}
                    style={{ color: theme.primaryRgb }}
                  />
                </div>
                linkedin.com/in/kaestrange
              </a>
              <a
                href="https://github.com/K3nn8DN"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 transition-colors ${theme.textOpacity} ${theme.hoverOpacity}`}
              >
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: theme.cardGradient,
                  }}
                >
                  <Github
                    size={20}
                    style={{ color: theme.primaryRgb }}
                  />
                </div>
                github.com/K3nn8DN
              </a>
              
            </div>
          </div>
          <div className="pr-[30px]">
            <BubbleGame />
          </div>
        </div>
      </div>
    </section>
  );
}