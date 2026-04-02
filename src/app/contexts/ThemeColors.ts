export type ColorScheme = "green-cyan" | "orange-red";
export type ThemeMode = "game" | "cozy";
export type DarkMode = "light" | "dark";

// Helper to convert rgb to rgba with opacity
const rgbToRgba = (rgb: string, opacity: number): string => {
  return rgb
    .replace("rgb", "rgba")
    .replace(")", `, ${opacity})`);
};

export interface ThemeColors {
  // Base colors (RGB format)
  primaryRgb: string;
  secondaryRgb: string;
  primary500Rgb: string;
  secondary500Rgb: string;
  blackWhite: string;

  // Text colors
  text: string;
  textOpacity: string;
  textMuted: string;
  textGray: string; // Replaces text-gray-500

  // Hover states
  hover: string;
  hoverOpacity: string;
  colorHover: string;

  // Border
  border: string;
  buttonBorderColor: string;

  // Background
  bg: string; // Background class for cards/sections
  bgColor: string; // Background color (rgba string)
  bgGradientRgba: string;
  bgGradientRgbaSwap: string;

  // Button colors
  buttonBgColor: string;
  buttonBgHoverColor: string;
  buttonBorderHoverColor: string;

  // Primary/Secondary classes
  primary: string;
  secondary: string;

  // Shadow and glow
  shadow: string;
  portfolioColor: string;

  // Additional colors
  colorBorder: string;
  borderColor: string;
  textColor: string;
  bgHover: string;

  // Common gradient strings (ready to use in style={{ background: ... }})
  headingGradient: string; // For h1, h2 text
  buttonGradient: string; // For buttons
  cardGradient: string; // For card backgrounds (low opacity)
  cardGradientMedium: string; // Medium opacity variant
  cardGradientHover: string; // For hover states
  sectionBgGradient: string; // For section backgrounds
  sectionBgGradientReverse: string; // Reversed direction
  heroBgGradient: string; // For hero section
  skillsGradient: string; // For skills section
  footerGradient: string; // For footer with strong color at bottom

  // Effect modifiers
  sparkleOpacity: number;
  glowOpacity: number;
  borderOpacity: number;
  backgroundImageOpacity: number;
  glowColor: string;

  // Mode tracking (needed by components)
  darkMode?: DarkMode;
  themeMode?: ThemeMode;
  colorScheme?: ColorScheme;
}

// Base color schemes
const colorSchemeBase: Record<
  ColorScheme,
  Partial<ThemeColors>
> = {
  "green-cyan": {
    primaryRgb: "rgb(16, 185, 129)", // green-500
    secondaryRgb: "rgb(6, 182, 212)", // cyan-500
    primary500Rgb: "rgb(16, 185, 129)",
    secondary500Rgb: "rgb(6, 182, 212)",
    primary: "text-green-500",
    secondary: "text-cyan-500",
    colorHover: "hover:text-green-500",
    bgGradientRgba: "rgba(16, 185, 129, 0.1)",
  },
  "orange-red": {
    primaryRgb: "rgb(249, 115, 22)", // orange-500
    secondaryRgb: "rgb(239, 68, 68)", // red-500
    primary500Rgb: "rgb(249, 115, 22)",
    secondary500Rgb: "rgb(239, 68, 68)",
    primary: "text-orange-500",
    secondary: "text-red-500",
    colorHover: "hover:text-orange-500",
    bgGradientRgba: "rgba(249, 115, 22, 0.1)",
  },
};

const darkModeModifiers = {
  light: (
    c: Partial<ThemeColors>,
    themeMode: ThemeMode,
  ): ThemeColors =>
    ({
      ...c,
      text: "text-gray-900",
      textOpacity: "text-gray-700",
      textMuted: "text-gray-500",
      textGray: "text-gray-500",
      hover: "hover:text-gray-900",
      hoverOpacity: "hover:text-gray-900",
      border: "border-gray-200",
      buttonBorderColor: rgbToRgba(c.primaryRgb!, 0.3),
      blackWhite: "#ffffff",

      // Background
      bg: "bg-white/90",
      bgColor: "rgba(255, 255, 255, 0.9)",
      bgHover: "hover:bg-gray-100",

      // Button colors
      buttonBgColor: "rgba(255, 255, 255, 0.5)",
      buttonBgHoverColor: rgbToRgba(c.primaryRgb!, 0.1),
      buttonBorderHoverColor: rgbToRgba(c.primaryRgb!, 0.5),

      // Shadow and glow
      shadow: "",
      portfolioColor: c.primaryRgb!,

      // Additional colors
      colorBorder: rgbToRgba(c.primaryRgb!, 0.3),
      borderColor: "rgba(229, 231, 235, 1)",
      textColor: "rgb(17, 24, 39)",

      // Gradients for light mode
      headingGradient: `linear-gradient(to right, ${c.primaryRgb}, ${c.secondaryRgb})`,
      buttonGradient: `linear-gradient(to right, ${c.primary500Rgb}, ${c.secondary500Rgb})`,
      cardGradient: `linear-gradient(135deg, ${rgbToRgba(c.primary500Rgb!, 0.1)}, ${rgbToRgba(c.secondary500Rgb!, 0.1)})`,
      cardGradientMedium: `linear-gradient(135deg, ${rgbToRgba(c.primary500Rgb!, 0.2)}, ${rgbToRgba(c.secondary500Rgb!, 0.2)})`,
      cardGradientHover: `linear-gradient(135deg, ${rgbToRgba(c.primary500Rgb!, 0.15)}, ${rgbToRgba(c.secondary500Rgb!, 0.15)})`,
      sectionBgGradient: `linear-gradient(to bottom, 
        rgba(255, 255, 255, 0) 0%, 
        rgba(255, 255, 255, 0) 65%,
        ${rgbToRgba(c.primary500Rgb!, 0.08)} 85%,
        ${rgbToRgba(c.secondary500Rgb!, 0.12)} 100%
      )`,
      sectionBgGradientReverse: `linear-gradient(to bottom, 
        ${rgbToRgba(c.secondary500Rgb!, 0.12)} 0%,
        ${rgbToRgba(c.primary500Rgb!, 0.08)} 15%,
        rgba(255, 255, 255, 0) 35%,
        rgba(255, 255, 255, 0) 100%
      )`,
      heroBgGradient: `linear-gradient(to bottom right, rgb(255, 255, 255), rgb(243, 244, 246), ${c.bgGradientRgba})`,
      skillsGradient:
        "linear-gradient(to bottom right, rgb(255, 255, 255), rgb(249, 250, 251))",
      footerGradient: `radial-gradient(ellipse at center bottom, 
        ${rgbToRgba(c.secondary500Rgb!, 0.15)} 0%,
        ${rgbToRgba(c.primary500Rgb!, 0.08)} 30%,
        rgba(255, 255, 255, 0) 70%
      )`,
    }) as ThemeColors,

  dark: (
    c: Partial<ThemeColors>,
    themeMode: ThemeMode,
  ): ThemeColors =>
    ({
      ...c,
      text: "text-white",
      textOpacity: "text-gray-300",
      textMuted: "text-gray-400",
      textGray: "text-gray-500",
      hover: "hover:text-white",
      hoverOpacity: "hover:text-gray-100",
      border: "border-gray-800",
      buttonBorderColor: rgbToRgba(c.primaryRgb!, 0.5),
      blackWhite: "#000000",

      // Background
      bg: "bg-gray-900/90",
      bgColor: "rgba(31, 41, 55, 0.9)",
      bgHover: "hover:bg-gray-800",

      // Button colors
      buttonBgColor: "rgba(17, 24, 39, 0.8)",
      buttonBgHoverColor: rgbToRgba(c.primaryRgb!, 0.2),
      buttonBorderHoverColor: rgbToRgba(c.primaryRgb!, 0.8),

      // Shadow and glow
      shadow: `shadow-[0_0_30px_${rgbToRgba(c.primaryRgb!, 0.3)}]`,
      portfolioColor: c.primaryRgb!,

      // Additional colors
      colorBorder: rgbToRgba(c.primaryRgb!, 0.5),
      borderColor: "rgba(55, 65, 81, 1)",
      textColor: "rgb(255, 255, 255)",

      // Gradients for dark mode
      headingGradient: `linear-gradient(to right, ${c.primaryRgb}, ${c.secondaryRgb})`,
      buttonGradient: `linear-gradient(to right, ${c.primary500Rgb}, ${c.secondary500Rgb})`,
      cardGradient: `linear-gradient(135deg, ${rgbToRgba(c.primary500Rgb!, 0.1)}, ${rgbToRgba(c.secondary500Rgb!, 0.1)})`,
      cardGradientMedium: `linear-gradient(135deg, ${rgbToRgba(c.primary500Rgb!, 0.2)}, ${rgbToRgba(c.secondary500Rgb!, 0.2)})`,
      cardGradientHover: `linear-gradient(135deg, ${rgbToRgba(c.primary500Rgb!, 0.15)}, ${rgbToRgba(c.secondary500Rgb!, 0.15)})`,
      sectionBgGradient: `linear-gradient(to bottom,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 60%,
      ${rgbToRgba(c.primary500Rgb!, 0.4)} 100%
    )`,
      sectionBgGradientReverse:  `linear-gradient(to bottom,
      ${rgbToRgba(c.primary500Rgb!, 0.4)} 0%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 1) 100%
      
    )`,
      heroBgGradient: `linear-gradient(to bottom right, black, rgb(3, 7, 18), ${c.bgGradientRgba})`,
      skillsGradient:
        "linear-gradient(to bottom right, rgb(17, 24, 39), rgb(3, 7, 18))",
      footerGradient: `radial-gradient(
        ellipse 240px 90px at center bottom,
        ${rgbToRgba(c.secondary500Rgb!, 0.20)} 0%,
        rgba(0, 0, 0, 0.5) 90%,
        rgba(0, 0, 0, 1) 100%
      )`
    }) as ThemeColors,
};

const themeModeModifiers = {
  cozy: (c: ThemeColors): ThemeColors => ({
    ...c,
    // Cozy mode: NO glowing effects
    sparkleOpacity: 0.4,
    glowOpacity: 0,
    borderOpacity: 0,
    backgroundImageOpacity: 0.3,
    glowColor: "rgba(0, 0, 0, 0)",
  }),

  game: (c: ThemeColors): ThemeColors => ({
    ...c,
    // Game mode: Full glowing effects
    sparkleOpacity: 0.4,
    glowOpacity: 0.3,
    borderOpacity: 0.5,
    backgroundImageOpacity: 0.2,
    glowColor: c.primaryRgb,
  }),
};

// Combine everything dynamically
export function getThemeColors(
  colorScheme: ColorScheme,
  themeMode: ThemeMode,
  darkMode: DarkMode,
): ThemeColors {
  const base = colorSchemeBase[colorScheme];
  const withDarkMode = darkModeModifiers[darkMode](
    base,
    themeMode,
  );
  const finalTheme =
    themeModeModifiers[themeMode](withDarkMode);
  return {
    ...finalTheme,
    darkMode,
    themeMode,
    colorScheme,
  };
}