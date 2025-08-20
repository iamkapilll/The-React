import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'hello world'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {   //reducer takes properties and functions
        addTodo: () => {},
        removeTodo: () => {},
    }
}) 