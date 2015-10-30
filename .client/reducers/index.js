import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import todos from './todos';
import counter from './counter';

export default combineReducers({
  router: routerStateReducer,
  todos,
  counter,
});
