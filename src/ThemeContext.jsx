// src/ThemeContext.js
import { createContext, useState } from "react";

// Step 1: Create context
export const ThemeContext = createContext();

// Step 2: Create provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
