import { createContext, useContext } from "react";

// Context created with default shape (sample data + empty functions)
export const TodoContext = createContext({
  todos: [
    { id: 1, todo: "todo message", completed: false }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
})

// Provider component → used in App.jsx
export const TodoProvider = TodoContext.Provider

// Custom hook to easily access context
export const useTodo = () => {
  return useContext(TodoContext)
}


// whenever we do "useContext" wherever in the file we need to provide the name of the context that we have created "TodoContext"       

















// What’s happening here?

// createContext() creates a shared data space (like a central warehouse).

// We give it:

     // todos (an array of todo objects).

     // Functions (addTodo, updateTodo, etc.) that will be implemented later in App.jsx.

// TodoProvider is the only way to give actual data to components from this context.

// useTodo() is just a shortcut so you don’t need to import useContext and TodoContext everywhere.







//duplicated and chatgpt code:

// We import createContext to make a context and useContext to use it in components
// import { createContext, useContext } from "react";

// // Creating the context with a default structure (shape) of data and methods
// // This is just the default value. The real values will come from App.jsx when we wrap it with the provider.
// export const TodoContext = createContext({
//     todos: [ // default example todos array
//         {
//             id: 1,                // unique identifier for each todo
//             todo: "todo message", // the actual text
//             completed: false      // whether it's done or not
//         }
//     ],
//     // Empty functions — they will be replaced by real ones from App.jsx
//     addTodo: (todo) => {},       // needs a todo object
//     updateTodo: (id, todo) => {},// needs id and updated todo object
//     deleteTodo: (id) => {},      // needs id of todo to remove
//     toggleComplete: (id) => {}   // needs id to toggle completed status
// });

// // Exporting the provider so App.jsx can wrap other components and pass data
// export const TodoProvider = TodoContext.Provider;

// // Custom hook to use the context easily in components
// export const useTodo = () => {
//     return useContext(TodoContext);
// };
