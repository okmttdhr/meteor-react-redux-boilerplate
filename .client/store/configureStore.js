import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';

import routes from 'routes';
import rootReducer from 'reducers';

export default function configureStore (initialState) {
  let createStoreWithMiddleware;

  const middleware = applyMiddleware(thunk);

  createStoreWithMiddleware = compose(
    middleware,
    reduxReactRouter({ routes, createHistory })
  );

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  return store;
}
