import { ThemeProvider } from './contexts/theme'
import './App.css'
import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
function App() {

  const [themeMode, setThemeMode] = useState("light") 

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect(() =>{
    document.querySelector('html').classList.remove("light", "dark") //this will remove the default value for light, dark for html which was actually original value

    document.querySelector("html").classList.add(themeMode) // this will add themeMode as setThemeMode as light and dark
  }, [themeMode])


  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
         <ThemeBtn /> {/* ThemeBtn component */}
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />{/* Card component */}
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
