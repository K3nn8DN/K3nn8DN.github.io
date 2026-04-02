import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ColorScheme, ThemeMode, DarkMode, ThemeColors, getThemeColors } from './ThemeColors';

interface ThemeContextType extends ThemeColors {
  colorScheme: ColorScheme;
  themeMode: ThemeMode;
  darkMode: DarkMode;
  setColorScheme: (cs: ColorScheme) => void;
  setThemeMode: (tm: ThemeMode) => void;
  setDarkMode: (dm: DarkMode) => void;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('green-cyan');
  const [themeMode, setThemeMode] = useState<ThemeMode>('game');
  const [darkMode, setDarkMode] = useState<DarkMode>('dark');
  const [colors, setColors] = useState<ThemeColors>(
    getThemeColors(colorScheme, themeMode, darkMode)
  );

  // recalc colors dynamically whenever theme changes
  useEffect(() => {
    setColors(getThemeColors(colorScheme, themeMode, darkMode));
  }, [colorScheme, themeMode, darkMode]);

  // toggle dark mode in <html> class for Tailwind dark support
  useEffect(() => {
    if (darkMode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const toggleDarkMode = () =>
    setDarkMode(dm => (dm === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider
      value={{
        ...colors,
        colorScheme,
        themeMode,
        darkMode,
        setColorScheme,
        setThemeMode,
        setDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('useTheme must be used within ThemeProvider');
  return context;
}