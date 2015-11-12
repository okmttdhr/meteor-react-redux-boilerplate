import React from 'react';
import assert from 'power-assert';
import TestUtils from 'react-addons-test-utils';
import TodoApp from 'dir_src/components/TodoApp';
import {setUp, todoMock} from 'dir_src/test/helper';

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<TodoApp {...props} />);
}

describe('components.TodoApp', function () {
  let _rendered;
  let _props;
  setUp();

  beforeEach(function () {
    _props = {
      todos: todoMock.item,
      actions: '',
    };

    _rendered = renderWithProps(_props);
  });

  it('Should include an <TodoApp>.', function () {
    const TodoAppDom = TestUtils.scryRenderedDOMComponentsWithClass(_rendered, 'TodoApp');
    assert(TodoAppDom.length === 1);
  });

  it('Should include an <TodoItem>.', function () {
    const TodoItem = TestUtils.scryRenderedDOMComponentsWithClass(_rendered, 'TodoItem');
    assert(TodoItem.length > 0);
  });
});
