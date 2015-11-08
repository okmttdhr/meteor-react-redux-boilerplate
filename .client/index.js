/* global Template */
import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'dir_src/containers/Root';

Template.body.onRendered(function() {
  ReactDOM.render(
    <Root
      debug={__DEBUG__}
      debugExternal={__DEBUG_NW__}/>,
    document.getElementById('root')
  );
});
