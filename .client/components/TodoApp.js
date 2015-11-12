import React, { PropTypes } from 'react';
import TodoItem from 'dir_src/components/TodoItem';

const TodoApp = React.createClass({
  propTypes: {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  },

  render() {
    const { todos, actions } = this.props;
    return (
      <div className='TodoApp'>
        <ul className='todo-list'>
          {todos.map(todo =>
            <TodoItem key={todo._id} todo={todo} {...actions} />
          )}
        </ul>
      </div>
    );
  },
});

export default TodoApp;
