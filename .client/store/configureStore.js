import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import DevTools from 'containers/DevTools';

import routes from 'routes';
import rootReducer from 'reducers';

export default function configureStore (initialState, debug = true) {
  let createStoreWithMiddleware;

  const middleware = applyMiddleware(thunk);

  if (debug) {
    createStoreWithMiddleware = compose(
      middleware,
      reduxReactRouter({ routes, createHistory }),
      DevTools.instrument()
    );
  } else {
    createStoreWithMiddleware = compose(
      middleware,
      reduxReactRouter({ routes, createHistory })
    );
  }

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  return store;
}
