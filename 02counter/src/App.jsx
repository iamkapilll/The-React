// the use of useState hool:
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  // const [count, setCount] = useState(0)

  let [counter, setcounter] = useState(15)  // basically it takes two values as array, (a)  The current state.  (b) A function that updates the state.,,,, the 15 is initial value
  // let counter = 15



  

  //youtube chai our code:
//   const addValue = ()=>{
//     console.log("value added", counter)
//     setcounter(counter +1)
//     setcounter(counter +1)
//     setcounter(counter +1)
//     setcounter(counter +1)
//  // the interview question is that will the initial value ie 15 be directly incremented to 19 or what? => no the initial value will not be incremented directly to 19 because the     setcounter(counter +1) is calling the same current state so it will only increment by 1 no matter what.

//   }
//  const addValue = ()=>{
//     console.log("value added", counter)
//     setcounter(prevCounter  => prevCounter +1)
//     setcounter(prevCounter  => prevCounter +1)
//     setcounter(prevCounter  => prevCounter +1)
//     setcounter(prevCounter  => prevCounter +1)
//   // now talking about this , the setcounter built in comes with a callback function so it fetches the current value of counter and named it as whatever(prevCounter) so it takes that and adds with + 1, and again another call another +1...., and imp thing>> the useState takes the batches of value first and sends it for display 
// // here it will surely incremented by +4 directly to make its intial value to be incremented to 19

//   }


  // const removeValue = ()=>{
  //   console.log("value removed", counter)
  //   setcounter(counter -1)
  // }







// youtube:assignment addvalue should be no greater than 20 and removevalue should be no smaller than 0

const addValue = ()=>{
  if(counter >= 20){ // this actually doesnot let the value of counter go greater than 20
    console.log("the counter value should not be greater than 20")
  }
  else{
    setcounter(counter + 1)
  }
}

const removeValue = ()=>{
  if(counter <= 0){   // this actually doesnot let the value of counter go less  than 0
    console.log("the counter value should not be lesser than 0")
  }
  else{
    setcounter(counter -1)
  }
}


  return (
    <>
      <h1>Chai our code</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
//export default App


