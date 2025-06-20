import { create } from "zustand";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("darkMode") === "true";
  }
  return false;
};

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: getInitialTheme(),
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.theme = state.darkMode ? "light" : "dark";
      return { darkMode: newMode };
    }),
}));
