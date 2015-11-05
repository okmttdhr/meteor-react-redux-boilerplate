import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import todo from './Todo';

export default combineReducers({
  router: routerStateReducer,
  todo,
});
