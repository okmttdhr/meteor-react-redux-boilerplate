/* global Todos */
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
} from 'dir_src/constants';
import { createReducer } from 'dir_src/utils';

const initialState = {};

export default createReducer(initialState, {
  [ADD_TODO]: (state, action) => {
    Todos.insert({
      completed: false,
      text: action.text,
    });
    return state;
  },
  [DELETE_TODO]: (state, action) => {
    Todos.remove(action.id);
    return state;
  },
  [EDIT_TODO]: (state, action) => {
    Todos.update(action.id, {$set: {text: action.text}});
    return state;
  },
  [COMPLETE_TODO]: (state, action) => {
    const todo = Todos.findOne(action.id);
    Todos.update(action.id, {$set: {completed: !todo.completed}});
    return state;
  },
});
