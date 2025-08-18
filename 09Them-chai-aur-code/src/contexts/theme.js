import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}



//ThemeContext will be used to provide theme related data and functions
//ThemeProvider will be used to wrap components that need access to theme data
//useTheme will be used to access theme data and functions in components
//createContext is used to create a context object
