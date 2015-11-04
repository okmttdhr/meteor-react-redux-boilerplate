import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import todo from './Todo';
import counter from './counter';

export default combineReducers({
  router: routerStateReducer,
  todo,
  counter,
});
