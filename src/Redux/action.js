import axios from 'axios'


const baseUrl = 'http://localhost:3001/todos'

export const fetchData = () => async (dispatch) => {
  try {
    const {data} = await axios.get(baseUrl);
    dispatch({ type: "INIT", payload: data });
  } catch (error) {
    console.log(error.message)
  }
};

export const addTodo = (newTodo) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}`, newTodo );
    dispatch({ type: "ADD_TODO", payload: newTodo });
  } catch (error) {
    console.log(error.message)
  }
};

export const toggleComplete = (toMark) => async (dispatch) => {
  try {
    
    const { data } = await axios.put(`${baseUrl}/${toMark.id}`, { ...toMark, completed: !toMark.completed });
    dispatch({ type: "TOGGLE_COMPLETE", payload: data });
  } catch (error) {
    console.log(error.message)
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
    dispatch({ type: "DELETE_TODO", payload: id });
  } catch (error) {
    console.log(error.message)
  }
};


