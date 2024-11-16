// DARK/LIGHT MODE
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeDarkIcon = document.getElementById("theme-toggle-dark");
  const themeLightIcon = document.getElementById("theme-toggle-light");

  // Apply theme based on preference
  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      themeDarkIcon.classList.remove("hidden");
      themeLightIcon.classList.add("hidden");
      themeToggleButton.setAttribute("aria-label", "Switch to light mode");
    } else {
      document.documentElement.classList.remove("dark");
      themeLightIcon.classList.remove("hidden");
      themeDarkIcon.classList.add("hidden");
      themeToggleButton.setAttribute("aria-label", "Switch to dark mode");
    }
  };

  // Toggle between light and dark theme
  const changeTheme = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("color-theme", newTheme);
    applyTheme(newTheme);
  };

  // Initialize theme based on saved preference or system settings
  const initTheme = () => {
    const savedTheme = localStorage.getItem("color-theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = savedTheme || (systemPrefersDark ? "dark" : "light");
    applyTheme(theme);
  };

  // Event listener for theme toggle button
  themeToggleButton.addEventListener("click", () => {
    changeTheme();
  });

  // Apply the correct theme on page load
  initTheme();
});
