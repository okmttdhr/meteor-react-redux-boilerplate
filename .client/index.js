import React from 'react';
import ReactDOM from 'react-dom'
import Root from './containers/Root';

Template.body.onRendered(function(){
  ReactDOM.render(
    <Root/>,
    document.getElementById('root')
  )
});
