import React, { useContext } from "react";
import ThemeProvider from "./ThemeProvider";
import ThemeContext from "./ThemeContext";

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`px-5 py-2 rounded-md shadow-md font-medium transition 
        ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

function Page() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center transition-colors duration-300
        ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}
    >
      <h1 className="text-3xl font-bold mb-6">
        {theme === "light" ? "Light Mode" : "Dark Mode"} Active
      </h1>
      <ThemedButton />
    </div>
  );
}


export default function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}
