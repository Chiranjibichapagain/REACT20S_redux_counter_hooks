
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      const { payload } = action
      return payload
    case "TOGGLE_COMPLETE":
      const { id } = action.payload
      return state.map((todo) => todo.id !== id ? todo : action.payload)
    case "DELETE_TODO":
      const { payload: delId } = action
      const clearedData = state.filter((todo) => todo.id !== delId)
      console.log('yoyo', clearedData)
      return clearedData
    case "ADD_TODO":
      const { payload: newTodo } = action
      return state.concat(newTodo)
    default:
      return state;
  }
};

export default todoReducer