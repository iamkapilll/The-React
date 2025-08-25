import { useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true) // at first it should be true 
  const dispatch = useDispatch()


  

  return (
    <>
    <h1>Blog App with Appwrite</h1>
    </>
  )
}

export default App
