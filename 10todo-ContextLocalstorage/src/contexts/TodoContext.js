import { createContext, useContext } from "react";

// Context created with default shape (sample data + empty functions)
export const TodoContext = createContext({
  todos: [
    { id: 1,
      todo: "todo message",
      completed: false }
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
