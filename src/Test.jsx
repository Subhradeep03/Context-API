import React from "react";
import { useTheme, colorOptions } from "./ThemeContext";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

const themeKeys = Object.keys(colorOptions);

const YourComponent = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <>
      <Topbar />
      <div style={{ background: theme.bgColor, color: theme.textColor }}>
        <h1>My Component</h1>
        <div
          style={{
            padding: "3rem",
            margin: "-4rem auto 6rem",
            background: theme.cardColor,
            color: theme.textColor,
          }}
        >
          Card
        </div>
        <p>
          Current Theme: {themeKeys.find((key) => colorOptions[key] === theme)}
        </p>

        <Link to="/test">Go the that page</Link>
        <div style={{ display: "flex", gap: "10px" }}>
          {themeKeys.map((key) => (
            <ThemeOption
              key={key}
              theme={colorOptions[key]}
              isSelected={colorOptions[key] === theme}
              handleThemeChange={handleThemeChange}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const ThemeOption = ({ theme, isSelected, handleThemeChange }) => {
  console.log(theme);
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        background: theme.bgColor,
        border: isSelected ? "2px solid #000" : "2px solid transparent",
        cursor: "pointer",
      }}
      onClick={() => handleThemeChange(theme)}
    />
  );
};

export default YourComponent;
