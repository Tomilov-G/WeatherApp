import { watch } from "vue";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
  const defaultTheme = useLocalStorage("theme", "light");

  const toggleChangeTheme = () => {
    defaultTheme.value = defaultTheme.value === "light" ? "dark" : "light";
  };

  watch(
    defaultTheme,
    (theme) => {
      const root = document.documentElement;
      if (!root) return;

      const components = [
        "color-background",
        "forecastCard-background",
        "mainComponent-background",
        "text-color",
      ];

      components.forEach((component) => {
        root.style.setProperty(
          `--${component}-default`,
          `var(--${component}-${theme})`
        );
      });
    },
    { immediate: true }
  );

  return {
    defaultTheme,
    toggleChangeTheme,
  };
};

