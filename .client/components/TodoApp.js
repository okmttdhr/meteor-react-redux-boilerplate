import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

const TodoApp = React.createClass({
  propTypes: {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  },

  render() {
    const { todos, actions } = this.props;

    return (
      <section className='main'>
        <ul className='todo-list'>
          {todos.map(todo =>
            <Todo key={todo._id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    );
  },
});

export default TodoApp;
