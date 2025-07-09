// src/components/ThemeToggler.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#f9f9f9" : "#333",
        color: theme === "light" ? "#333" : "#f9f9f9",
        padding: "2rem",
        textAlign: "center",
        minHeight: "100vh",
        transition: "all 0.5s ease",
      }}
    >
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default ThemeToggler;
