
import React from 'react'

function Card({username, btnText="visit me"}) {
    // console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">{btnText }</button>
  </div>
</div>
  )
}

export default Card






// import React from 'react'

// // function Card(props) {  // whenever we try to use same card but those cards have same elements/data, so to change the data according to to the element we use props, when we use loops whatever
// //   console.log("props:", props)

//   function Card({username}) { // we just destructured it from < Card username = "chai our code/>
//   // console.log(username)
//   return (
//     <>
//       <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
//   <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//   <div className="space-y-2 text-center sm:text-left">
//     <div className="space-y-0.5">
//       <p className="text-lg font-semibold text-black">{username}</p> 
//       <p className="font-medium text-gray-500">Product Engineer</p>
//     </div>
//     <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
//       Message
//     </button>
//   </div>
// </div>
//     </>
//   )
// }
// // for injecting any react variable we always use {}
// export default Card