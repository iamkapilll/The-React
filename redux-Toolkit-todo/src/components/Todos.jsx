import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)  // access todos from Redux store
  const dispatch = useDispatch()
  
  const [editingId, setEditingId] = useState(null)   // track which todo is being edited
  const [editText, setEditText] = useState("")       // track new text for editing

  const handleEdit = (todo) => {
    setEditingId(todo.id)     // set editing mode
    setEditText(todo.text)    // prefill with existing text
  }

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }))   // dispatch update
    setEditingId(null)   // exit editing mode
    setEditText("")
  }

  return (
    <>
      <h2 className="text-xl font-bold text-white">Todos</h2>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {editingId === todo.id ? (
              // ✅ Edit Mode
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="text-black px-2 py-1 rounded"
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="ml-2 text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
              </>
            ) : (
              // ✅ Normal Mode
              <>
                <span className="text-white">{todo.text}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos












































// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {removeTodo} from '../features/todo/todoSlice'

// function Todos() {
//     const todos = useSelector(state => state.todos)  //// useSelector for accessing or selectiong initial state from todoSlice.js
//     const dispatch = useDispatch()

//   return (
//     <>
//     <div>Todos</div>
//     <ul className="list-none">
//         {todos.map((todo) => (
//           <li
//             className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
//             key={todo.id}
//           >
//             <div className='text-white'>{todo.text}</div>
//             <button
//              onClick={() => dispatch(removeTodo(todo.id))}
//               className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                 />
//               </svg>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default Todos