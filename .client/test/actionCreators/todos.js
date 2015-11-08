import assert from 'power-assert';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  MARK_TODO,
} from 'constants';
import { createMockStore } from '../helper';
import * as TodosAction from '../../actions/Todo';

describe('actionCreators.todos', ()=> {
  it('TodosAction.addTodo', (done)=> {
    const store = createMockStore({}, (dispatchedAction, dispatchedCount)=> {
      assert(dispatchedAction.type === ADD_TODO);
      assert(dispatchedAction.text === 'text');
      done();
    });
    store.dispatch(TodosAction.addTodo('text'));
  });
});
