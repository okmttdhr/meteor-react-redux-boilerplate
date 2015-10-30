import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { connectToMeteor } from 'meteoredux';
import routes from '../routes';
import configureStore from '../store/configureStore';

Meteor.subscribe('todos');

const store = configureStore(window.__INITIAL_STATE__);
connectToMeteor(store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
        </div>
      </Provider>
    );
  }
}
