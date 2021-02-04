import React from 'react'
import {useDispatch } from 'react-redux'

import { FaTrash } from 'react-icons/fa';
import {toggleComplete, deleteTodo} from '../Redux/action'
import styles from './Todo.module.css'

const Todo = ({ data }) => {
    const dispatch = useDispatch()
    
    const handleChange = () => {
        dispatch(toggleComplete(data))
    }

    const handleDelete = () => {
       dispatch(deleteTodo(data.id))
   }

    return (
        <div className={styles.todoMain}>
            <input checked={data.completed?'checked':''} onChange={handleChange} className={styles.checkbox} type="checkbox" /> 
            <p className={data.completed?styles.crossedTodo:styles.todo}>{ data.todo}</p>
            <FaTrash onClick={handleDelete} fontSize='23' className={styles.trashIcon}/>
        </div>
    )
}

export default Todo
