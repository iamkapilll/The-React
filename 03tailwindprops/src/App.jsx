// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  // let myObj = {
  //   name : 'kapil',
  //   age : 21
  // }

  // let newArray = [1,2,3]

  return (
    <>
     <h1 className='bg-green-700 text-black p-4 rounded-2xl'>Tailwind test</h1>

    <Card username="chai our code" /> {/* // whateve you give here will show there in the Card props , here we can also pass the object, and arrays defined above as myObj >> as an variable method {}  someObject={myObj} someArray={newArray}*/}

     <Card username="kapil" />
    </>
  )
}

export default App
