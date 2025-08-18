// import { StrictMode } from 'react'
import React from "react";

import { createRoot } from 'react-dom/client'

import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//       <h1>i am trying to render myApp from the same file - main.js to same file - main.js</h1> 

//     </div>
//   )
// }


// this our own type(custom) so it will not render here
// const reactElement = {
//     type: 'a', // anchor tag
//     props: { // props = property
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google' // kind of childElement: like if a parent had four days and those four days can be their childElements
// }
  


const anotherUser = " chai our react"


const reactElement = React.createElement(
  'a',             // this starts with any tag as 'a'
  {href:'https://google.com', target: '_blank'}, // and inside this {} , it works as setAttribute for its property and value as upper code we see as props
  'click me to visit',// and atlast a direct stiring for children

  anotherUser

)




// this is not a function but an object so to call this for rendering we do jsut "anotherElement"
// const anotherElement = (
//   <a href="https://google.com" target='_blank'>visit google</a>
// )

createRoot(document.getElementById('root')).render(
  
    // <App />
    // <MyApp />
    // anotherElement
    reactElement  // in this way we can render object methods
  
)
