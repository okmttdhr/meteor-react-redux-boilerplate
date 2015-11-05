/* global Meteor */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import routes from '../routes';
import configureStore from '../store/configureStore';

Meteor.subscribe('todos');
const store = configureStore(window.__INITIAL_STATE__);

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
