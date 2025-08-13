
import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {

  const [todos. setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo},...prev]) //prev means old todo. new todo with id and todo to be added in the array with prev todo that is already in the array
  }

  const updateTodo = (id, todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id))) //here we are mapping through the previous todos (individual todos) and checking if the id matches, then we return the updated todo
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white"
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
