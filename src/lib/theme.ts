export type Theme = "light" | "dark";

export function applyTheme(theme: Theme): void {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    const body = document.body;

    // Add transition class
    root.classList.add("theme-transition");

    // Remove all theme classes
    root.classList.remove("dark", "light");
    body.classList.remove("dark", "light");

    // Apply theme
    root.classList.add(theme);
    body.classList.add(theme);

    localStorage.setItem("theme", theme);

    // Remove transition class after animation
    setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 500);
  }
}

export function getStoredTheme(): Theme {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("theme") as Theme;
    if (stored && ["light", "dark"].includes(stored)) {
      return stored;
    }
  }
  return "dark";
}

export function initializeTheme(): void {
  const theme = getStoredTheme();
  applyTheme(theme);
}
