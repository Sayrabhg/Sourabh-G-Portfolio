import { useState, useEffect } from "react";
import "../styles/Toggle.css"; // 👈 CSS

export default function ToggleSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="toggle-switch" onClick={() => setDarkMode(!darkMode)}>
      <div className={`switch ${darkMode ? "dark" : ""}`}>
        {darkMode ? "🌙" : "☀️"}
      </div>
    </div>
  );
}
