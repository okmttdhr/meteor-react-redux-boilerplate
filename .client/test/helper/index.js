import jsdom from 'jsdom';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as mock from 'dir_src/test/helper/mock';

function setUp() {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = {userAgent: 'node.js'};
}

/**
 * action のテストに必要な store を作成する。
 * @param {Object/Function} getState
 * @param {Function} onAcion
 */
function createMockStore(getState, onAcion) {
  const middleware = [thunk];
  let dispatchedCount = 0;
  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ? getState() : getState;
      },
      dispatch(action) {
        dispatchedCount++;
        onAcion(action, dispatchedCount);
        return action;
      },
    };
  }

  const mockStoreWithMiddleware = applyMiddleware(...middleware)(mockStoreWithoutMiddleware);
  return mockStoreWithMiddleware();
}

export default {
  setUp,
  createMockStore,
  ...mock,
};
