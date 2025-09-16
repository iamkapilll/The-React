import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}> // this div is taking the whole body of the screen
        {/* You can add buttons or other UI here to change the color */}

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> // this div is a fixed at bottom taking a block  because it is a div so block element

          <div className='flex flex-wrap justify-center gap-3 shadow=lg bg-white px-3 py-2 rounded-3xl'> // this div is actually a flexed so the buttons inside are flexed

            <button onClick={()=> setColor("red")} 
            className='outline-none px-4 rounded-full text-white shadow-2xl' 
            style={{backgroundColor:"red"}}>Red</button>


            <button onClick={()=> setColor("green")} className='outline-none px-4 rounded-full text-white shadow-2xl' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=> setColor("blue")} className='outline-none px-4 rounded-full text-white shadow-2xl' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=> setColor("orange")} className='outline-none px-4 rounded-full text-white shadow-2xl' style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=> setColor("black")} className='outline-none px-4 rounded-full text-white shadow-2xl' style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=> setColor("pink")} className='outline-none px-4 rounded-full text-white shadow-2xl' style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=> setColor("teal")} className='outline-none px-4 rounded-full text-white shadow-2xl' style={{backgroundColor:"teal"}}>Teal</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App

//exporting
