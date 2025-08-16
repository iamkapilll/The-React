
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {

  const [todos, setTodos] = useState([])  // todos is an array

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
    localStorage.setItem("todos", JSON.stringify(todos)) // json.stringify will make it as string. setItem first part is key and last part is value localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white"
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) =>(
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
   </TodoProvider>
  )
}

export default App


//see this notes for better understanding
// AI Overview and important topic for local storage

// localStorage in React allows for the persistence of data directly within the user's web browser, surviving page refreshes and even browser restarts. This is achieved by storing data as key-value pairs.
// Key Concepts and Usage:
// localStorage API:
// localStorage.setItem(key, value): Stores a value under a specified key. The value must be a string; objects or arrays need to be converted using JSON.stringify().
// localStorage.getItem(key): Retrieves the value associated with a specified key. The retrieved value will be a string and may need to be parsed back to an object or array using JSON.parse().
// localStorage.removeItem(key): Deletes the item associated with a specified key.
// localStorage.clear(): Removes all items from localStorage.
// Integration with React Hooks:
// useState: Used to manage the component's state, which can then be synchronized with localStorage.
// useEffect: Crucial for interacting with localStorage.
// To load data from localStorage when the component mounts, localStorage.getItem() is called within useEffect with an empty dependency array ([]).
// To save data to localStorage whenever a specific state changes, localStorage.setItem() is called within useEffect with the relevant state variable in the dependency array.
// Custom useLocalStorage Hook:
// For cleaner and more reusable code, a custom hook like useLocalStorage can encapsulate the logic for interacting with localStorage and synchronizing it with React state. This hook typically returns the current state and a function to update it, handling the localStorage operations internally.
// Common Use Cases:
// Persisting user preferences (e.g., dark mode settings).
// Saving form input values to avoid data loss on refresh.
// Storing client-side session information.
// Considerations:
// Security: localStorage is not secure for sensitive data as it can be accessed by client-side scripts.
// Storage Limits: localStorage has a storage limit, typically around 5MB.
// Synchronicity: localStorage operations are synchronous, meaning they can block the main thread if large amounts of data are being processed.













//gpt code for better understanding:
// import { useEffect, useState } from 'react';
// import './App.css';
// import { TodoProvider } from './contexts';
// import TodoForm from './components/TodoForm';

// function App() {
//     // Main global todos state (array of todo objects)
//     const [todos, setTodos] = useState([]);

//     // Function to add a new todo
//     const addTodo = (todo) => {
//         setTodos((prev) => [
//             { id: Date.now(), ...todo }, // add unique id and spread todo object
//             ...prev                      // keep old todos
//         ]);
//     };

//     // Function to update an existing todo
//     const updateTodo = (id, updatedTodo) => {
//         setTodos((prev) =>
//             prev.map((prevTodo) =>
//                 prevTodo.id === id ? updatedTodo : prevTodo
//             )
//         );
//     };

//     // Function to delete a todo
//     const deleteTodo = (id) => {
//         setTodos((prev) => prev.filter((todo) => todo.id !== id));
//     };

//     // Function to toggle a todo's completion status
//     const toggleComplete = (id) => {
//         setTodos((prev) =>
//             prev.map((prevTodo) =>
//                 prevTodo.id === id
//                     ? { ...prevTodo, completed: !prevTodo.completed }
//                     : prevTodo
//             )
//         );
//     };

//     // Load todos from localStorage on first render
//     useEffect(() => {
//         const storedTodos = JSON.parse(localStorage.getItem("todos"));
//         if (storedTodos && storedTodos.length > 0) {
//             setTodos(storedTodos);
//         }
//     }, []);

//     // Save todos to localStorage whenever todos state changes
//     useEffect(() => {
//         localStorage.setItem("todos", JSON.stringify(todos));
//     }, [todos]);

//     return (
//         // Wrap everything with the provider so todos and functions are available everywhere
//         <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
//             <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">
//                         Manage Your Todos
//                     </h1>
//                     <div className="mb-4">
//                         {/* Todo form component */}
//                         <TodoForm />
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/* Here you'd loop and render each TodoItem */}
//                     </div>
//                 </div>
//             </div>
//         </TodoProvider>
//     );
// }

// export default App;
