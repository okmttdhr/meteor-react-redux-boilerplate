/* global Meteor */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import routes from 'dir_src/routes';
import configureStore from 'dir_src/store/configureStore';
import DevTools from './DevTools';
import { createDevToolsWindow } from 'dir_src/utils';

Meteor.subscribe('todos');
const store = configureStore(window.__INITIAL_STATE__);

export default class Root extends Component {
  static propTypes = {
    debug : React.PropTypes.bool,
    debugExternal : React.PropTypes.bool,
  }

  static defaultProps = {
    debug : false,
    debugExternal : false,
  }

  renderDevTools () {
    if (!this.props.debug) {
      return null;
    }

    return this.props.debugExternal ?
      createDevToolsWindow(store) : <DevTools />;
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            {routes}
          </ReduxRouter>
          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
