import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("pixel-ui-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("pixel-ui-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

export default useTheme;
