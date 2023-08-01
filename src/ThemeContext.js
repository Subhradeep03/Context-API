// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const colorOptions = {
    theme1: {
        bgColor: "#0f0f0f",
        cardColor: "#fbb12f",
        textColor: "#ffffff",
        secondarybgColor: "#0f0f0f"
    },
    theme2: {
        bgColor: "#ff0000",
        cardColor: "#00ff00",
        textColor: "#ffffff",
        secondarybgColor: "#0f0f0f"
    },
    theme3: {
        bgColor: "#fff",
        cardColor: "#3498db",
        textColor: "#5a67d8",
        secondarybgColor: "#0f0f0f"
    },
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(
        storedTheme ? JSON.parse(storedTheme) : colorOptions.theme1
    );

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    return useContext(ThemeContext);
};

export { ThemeProvider, useTheme, colorOptions };
