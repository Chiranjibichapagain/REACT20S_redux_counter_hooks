import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import todoReducer from './reducers'

const reducer = combineReducers({
  todoReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;