import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * action のテストに必要な store を作成する。
 * @param {Object/Function} getState
 * @param {Function} onAcion
 */
export function createMockStore(getState, onAcion) {
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
