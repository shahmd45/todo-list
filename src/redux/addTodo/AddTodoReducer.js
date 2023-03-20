import { ADD_TODO, ADD_TEXT, ADD_ERROR, ADD_STATUS } from './AddTodoType';

const initialState = {
  todos: [],
  inputText: '',
  inputError: '',
  status: 'All'
};

const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };

    case ADD_TEXT:
      return {
        ...state,
        inputText: action.payload
      };

    case ADD_ERROR:
      return {
        ...state,
        inputError: action.payload
      };

    case ADD_STATUS:
      return {
        ...state,
        status: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default addTodoReducer;
