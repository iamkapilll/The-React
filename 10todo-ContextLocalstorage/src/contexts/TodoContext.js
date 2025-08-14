import { createContext, useContext } from "react";

// Creating the context with some default shape (data + methods)
export const TodoContext = createContext({
    todos: [ // properties defined
        {
            id: 1,
            todo: "todo message",
            completed: false
        }
    ],
     // methods declared for later used in App.jsx
    addTodo: (todo) => {},   //this needs text
    updateTodo: (id, todo) => {},   // this needs id and text
    deleteTodo: (id) => {},  // this needs id
    toggleComplete: (id) => {}  // this needs id
}) // creation of context

export const TodoProvider = TodoContext.Provider // exporting provider for wrapping thing in App.jsx

export const useTodo = () =>{ // this is a  custom hook will be use to access datas of TodoContext
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