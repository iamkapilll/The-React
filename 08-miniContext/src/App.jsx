import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
//here we will get the data from usercontextprovideer and wrap them
function App() {

  return (
    <UserContextProvider>
     <h1>React with chai</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
