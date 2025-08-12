import { createContext, useContext } from "react";

export const TodoContext = createContext({}) // creation of context

export const TodoProvider = TodoContext.Provider

export const useTodo = () =>{ // this is a  custom hook
    return useContext(TodoContext)
}

// whenever we do "useContext" wherever in the file we need to provide the name of the context that we have created "TodoContext"