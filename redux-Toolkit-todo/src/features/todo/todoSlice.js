import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'hello world'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {   //reducer takes properties and functions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload     //payload is an object it self so it can generate text
            }
        },
        removeTodo: () => {},
    }
}) 

//state and actions are like compulsory included on those rediucers methods
// state: it is like can be a value for something which can be changed and updated,
// action: it is like can be parameter for like passing texts, id, etc