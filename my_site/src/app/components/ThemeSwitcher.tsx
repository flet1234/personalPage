"use client";
import { useEffect, useState } from "react";
import "@/app/css/themeSwitcher.css";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} aria-label="Toggle Dark Mode">
      <div className="themeIcon text-3xl">
        <span className={isDarkMode ? `in` : `out`} >🌙</span>
        <span className={isDarkMode ? `out` : `in`}>☀️</span>
      </div>
    </button>
  );
};

export default ThemeSwitcher;
