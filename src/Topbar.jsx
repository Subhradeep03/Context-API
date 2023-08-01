import React from "react";
import { useTheme, colorOptions } from "./ThemeContext";

const themeKeys = Object.keys(colorOptions);

const Topbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div style={{ background: theme.cardColor, color: theme.textColor }}>
      Topbar
    </div>
  );
};

export default Topbar;
