import {createContext, usecontext} from "react"

export const ThemeContext = createContext({
    theme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return usecontext(ThemeContext)
}