// the use of useState hool:
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  // const [count, setCount] = useState(0)

  let [counter, setcounter] = useState(15)  // basically it takes two values as array, (a)  The current state.  (b) A function that updates the state.
  // let counter = 15


  //youtube chai our code:
  // const addvalue = ()=>{
  //   console.log("value added", counter)
  //   setcounter(counter +1)
  // }

  // const removecalue = ()=>{
  //   console.log("value removed", counter)
  //   setcounter(counter -1)
  // }


// youtube:assignment addvalue should be no greater than 20 and removevalue should be no smaller than 0

const addvalue = ()=>{
  if(counter >= 20){
    console.log("the counter value should be no greater than 20")
  }
  else{
    setcounter(counter + 1)
  }
}

const removeValue = ()=>{
  if(counter <= 0){
    console.log("the counter value should be no lesser than 0")
  }
  else{
    setcounter(counter -1)
  }
}


  return (
    <>
      <h1>Chai our code</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
