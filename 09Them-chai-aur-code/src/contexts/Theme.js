import {createContext, usecontext} from "react"

export const ThemeContext = createContext({
    theme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})