import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  MARK_TODO,
  MARK_ALL,
  CLEAR_MARKED,
} from '../../constants';
import { createReducer } from '../../utils';


const initialState = {};

export default createReducer(initialState, {
  [ADD_TODO]: (state, action) => {
    Todos.insert({
      completed: false,
      text: action.text
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
  [MARK_TODO]: (state, action) => {
    const todo = Todos.findOne(action.id);
    Todos.update(action.id, {$set: {completed: !todo.completed}});
    return state;
  },
  [MARK_ALL]: (state, action) => {
    Todos.update({}, {$set: {completed: true}});
    return state;
  },
  [CLEAR_MARKED]: (state, action) => {
    Todos.update({}, {$set: {completed: false}});
    return state;
  },
});
