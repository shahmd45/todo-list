import { combineReducers } from 'redux';
import addTodoReducer from './addTodo/AddTodoReducer';

const rootReducer = combineReducers({
  addTodo: addTodoReducer
});

export default rootReducer;
