import { ADD_TODO, ADD_TEXT, ADD_ERROR, ADD_STATUS } from './AddTodoType';

export const addTask = (todos) => {
  return {
    type: ADD_TODO,
    payload: todos
  };
};

export const addInputText = (value) => {
  return {
    type: ADD_TEXT,
    payload: value
  };
};

export const addInputError = (value) => {
  return {
    type: ADD_ERROR,
    payload: value
  };
};

export const addStatus = (value) => {
  return {
    type: ADD_STATUS,
    payload: value
  };
};
