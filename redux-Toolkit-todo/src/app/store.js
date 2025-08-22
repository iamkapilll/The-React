// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

// Create the store and register our todoSlice reducer
export const store = configureStore({
    reducer: todoReducer  // We directly set todoReducer (state shape will match reducer's initialState)
})

// configureStore creates the store (where your entire app state lives).

// todoReducer is coming from todoSlice.js, which manages todos.