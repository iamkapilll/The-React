import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [ // properties defined
        {
            id: 1,
            todo: "todo message",
            completed: false
        }
    ],
    addTodo: (todo) => {}, // methods declared for later used in App.jsx
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
}) // creation of context

export const TodoProvider = TodoContext.Provider

export const useTodo = () =>{ // this is a  custom hook
    return useContext(TodoContext)
}

// whenever we do "useContext" wherever in the file we need to provide the name of the context that we have created "TodoContext"