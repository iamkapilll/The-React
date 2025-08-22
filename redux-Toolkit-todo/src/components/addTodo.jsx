import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState("")     // local input state
  const dispatch = useDispatch()             // hook to dispatch actions

  const addTodoHandler = (e) => {
    e.preventDefault()
    if(input.trim() === "") return;          // prevent empty todos
    dispatch(addTodo(input))                 // dispatch addTodo action
    setInput("")                             // reset input field
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500
                   focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100
                   py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}   // update local input
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none
                   hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo

// User types in input → stored in local state (input).

// On submit → dispatches addTodo(input) → updates Redux store.

// UI re-renders because Redux store changed.