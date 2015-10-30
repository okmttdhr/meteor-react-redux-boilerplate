import React from 'react';
import ReactDOM from 'react-dom'
import { connectToMeteor } from 'meteoredux';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore(window.__INITIAL_STATE__);
connectToMeteor(store);

Template.body.onRendered(function(){
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
});
