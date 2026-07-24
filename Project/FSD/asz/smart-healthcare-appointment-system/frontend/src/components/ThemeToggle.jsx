import React from "react";
import { useTheme } from "../useTheme";
import { IconSun, IconMoon } from "../icons";

function ThemeToggle({ onDarkNavbar = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle${onDarkNavbar ? " on-dark-navbar" : ""}`}
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
}

export default ThemeToggle;
