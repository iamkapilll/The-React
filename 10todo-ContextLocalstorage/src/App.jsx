
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {

  const [todos. setTodos] = useState([])  // todos is an array

  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo},...prev]) //prev means old todo. new todo with id and todo to be added in the array with prev todo that is already in the array
  }

  const updateTodo = (id, todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id //here we are mapping through the previous todos (individual todos) and checking if the id matches, then we return the updated todo
      === id ? todo : prevTodo))) // so if it returns true i.e id is matched then return the todo that is given throuh parameter (id, todo) otherwise return the prevTodo (since prevTodo is known as individual todo in the old todos list and prevTodo.id is the individual todo's id in the list )
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) // here we take all the old value as prev and we filtered it with taking todo (individual value) so todo.id should not be equall to the id we have in the parameter.. so it will filter and make an new array without that id
  }


  //little bit logic needs here
  const toggleComplete = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id ===   // here we take prev(all old values) and map it as prevTodo (old individual value) and did checked prevTodo.id(old individual value id) with the provided id through the parameter
  id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)) // here if the id is true(matched) then returing it as [all prevTodo(old individual value) and making completed value from true to false (inverting "completed" value)] and and if id not matched prevTodo jasta ko testai rakhdine with its jasta ko testai  completed value
  }

  useEffect(() =>{
   const todos = JSON.parse(localStorage.getItem("todos") ) // here localstorage returns in string
   
   if(todos && todos.length > 0){  // if there are todos or todos lenght > 0 (means todos is an array so length)
    setTodos(todos)
   }
  }, [])

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


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
   </TodoProvider>
  )
}

export default App

