import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

const MainSection = React.createClass({
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
            <TodoItem key={todo._id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    );
  },
});

export default MainSection;
