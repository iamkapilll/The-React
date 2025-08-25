import { useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'

function App() {

  const [loading, setLoading] = useState(true) // at first it should be true for If user loggin or not
  const dispatch = useDispatch()


  

  return (
    <>
    <h1>Blog App with Appwrite</h1>
    </>
  )
}

export default App
