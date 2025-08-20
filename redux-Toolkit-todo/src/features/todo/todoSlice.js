import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'hello world'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {   //reducer takes properties and functions
        addTodo: (state, action) => {},
        removeTodo: () => {},
    }
}) 

//state and actions are like compulsory included on those rediucers methods
