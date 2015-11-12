import assert from 'power-assert';
import { ADD_TODO } from 'dir_src/constants';
import { createMockStore } from 'dir_src/test/helper';
import * as TodoAction from 'dir_src/actions/Todo';

describe('actions.Todo', ()=> {
  it('TodoAction.ADD_TODO', (done)=> {
    const store = createMockStore({}, (dispatchedAction, dispatchedCount)=> {
      assert(dispatchedAction.type === ADD_TODO);
      assert(dispatchedAction.text === 'text');
      done();
    });
    store.dispatch(TodoAction.addTodo('text'));
  });
});
