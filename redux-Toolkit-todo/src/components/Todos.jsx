import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'



const Todos = () => {

    const todos = useSelector(state => state.todos)  // useSelector for accessing or selectiong initial state from todoSlice.js
    const dispatch = useDispatch()

  return (
    <div>Todos</div>
  )
}

export default Todos