
import ThemeProvider from '../../09The-themeswitcher/src/ThemeProvider'
import './App.css'

function App() {

  return (
    <ThemeProvider>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* ThemeBtn component */}
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* Card component */}
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
