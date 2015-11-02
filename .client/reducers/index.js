import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import todos from './Todos';
import counter from './counter';

export default combineReducers({
  router: routerStateReducer,
  todos,
  counter,
});
