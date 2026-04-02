import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { CurrentProjects } from "../components/CurrentProjects";
import { Projects } from "../components/Projects";
import { SpriteFollower } from "../components/SpriteFollower";
import {
  robotSprite,
  catSprite,
  ghostSprite,
} from "../components/sprites";
import { useTheme } from "../contexts/ThemeContext";

export function Home() {
  const theme = useTheme();

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <CurrentProjects />
    </>
  );
}