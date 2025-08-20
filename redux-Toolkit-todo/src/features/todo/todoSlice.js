import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'hello world' }]
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
            state.todos.push(todo)  //updating the state`
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload)  // payload can be id or somethng else  
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload; // payload contains both id and new text
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text; // mutate safely (thanks to immer under the hood)
            }
        },
    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;  //individua functionality export which will be in action in future for components

export default todoSlice.reducer; // exporting all lists of reducers for no restrictions

//state and actions are like compulsory included on those rediucers methods
// state: it is like can be a value for something which can be changed and updated,
// action: it is like can be parameter for like passing texts, id, etc