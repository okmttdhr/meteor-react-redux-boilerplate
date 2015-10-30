import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import routes from '../routes';
import App from './App';

Meteor.subscribe('todos');

export default class Root extends Component {
  static propTypes = {
    store : React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
        </div>
      </Provider>
    );
  }
}
