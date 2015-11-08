import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'dir_src/layouts/CoreLayout';
import HomeView from 'dir_src/views/HomeView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
  </Route>
);
