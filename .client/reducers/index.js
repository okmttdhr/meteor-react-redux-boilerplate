import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import todo from 'dir_src/reducers/Todo';

export default combineReducers({
  router: routerStateReducer,
  todo,
});
