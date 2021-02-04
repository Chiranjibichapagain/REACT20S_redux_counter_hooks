import React, {useEffect} from "react";
import {useSelector, useDispatch } from 'react-redux'

import Todo from './Todo'
import styles from './App.module.css'
import AddTodo from "./AddTodo";
import {fetchData } from './Redux/action'

const App = () => {
  const dispatch = useDispatch()
  
  const data = useSelector((state)=>state.todoReducer)
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  
   
console.log('xxx--', data)
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>TODOs</h1>
      <p className={styles.para}>Track your daily activities with todo</p>
      <AddTodo/>
      <hr className={styles.hr} />
      {data.length>0 ? data.map((todo) => (
      <Todo key={todo.id} data={todo} />
      )) :
      <h2 className={styles.nodata}>Oops! no task in the list! Add a task to try.</h2>
      }
    </div>
  );
};

export default App;
