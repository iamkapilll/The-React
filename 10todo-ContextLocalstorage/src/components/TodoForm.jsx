import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {

    const [todo, setTodo] = useState("")  // this todo for individual todo

      // ⬅ Getting addTodo from context
    const {addTodo} = useTodo()  //addtodo vanne functionality chai yo todoForm ma use garna parcha because yo component is responsible for adding todos and tyo chai TodoContext ma xa so tyaha bata lyaune ani yeta functionality use garne
    
    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        // ⬅ Calling the addTodo function that was passed from App.jsx
        addTodo({todo, completed: false})
        setTodo("")

    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;




// What’s happening here?

// This is the input + button for adding a todo.

// useTodo() lets us access addTodo from context (which actually lives in App.jsx).

// On form submit:

// Prevent page reload (e.preventDefault()).

// If input is empty → do nothing.

// Otherwise, call addTodo() with the new todo object.

// Clear the input (setTodo("")).






//chatgpt code for better understanding:
// import React, { useState } from 'react';
// import { useTodo } from '../contexts'; // Import custom hook to access context

// function TodoForm() {
//     // Local state for input field (this is NOT the global todos state)
//     const [todo, setTodo] = useState("");

//     // Destructure addTodo function from global context
//     const { addTodo } = useTodo();

//     // Handle form submit
//     const add = (e) => {
//         e.preventDefault(); // prevent page reload on form submit
//         if (!todo) return;  // ignore if input is empty

//         // Call global addTodo function
//         addTodo({ todo, completed: false });

//         // Clear input after adding
//         setTodo("");
//     };

//     return (
//         <form onSubmit={add} className="flex">
//             <input
//                 type="text"
//                 placeholder="Write Todo..."
//                 className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//                 value={todo} // controlled component
//                 onChange={(e) => setTodo(e.target.value)} // update state as user types
//             />
//             <button
//                 type="submit"
//                 className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
//             >
//                 Add
//             </button>
//         </form>
//     );
// }

// export default TodoForm;




