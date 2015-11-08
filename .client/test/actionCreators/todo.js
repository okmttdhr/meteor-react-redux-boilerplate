import assert from 'power-assert';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  MARK_TODO,
} from 'dir_src/constants';
import { createMockStore } from 'dir_src/test/helper';
import * as TodosAction from 'dir_src/actions/Todo';

describe('actionCreators.todo', ()=> {
  it('TodosAction.addTodo', (done)=> {
    const store = createMockStore({}, (dispatchedAction, dispatchedCount)=> {
      assert(dispatchedAction.type === ADD_TODO);
      assert(dispatchedAction.text === 'text');
      done();
    });
    store.dispatch(TodosAction.addTodo('text'));
  });
});
