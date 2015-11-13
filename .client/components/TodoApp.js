import React from 'react';
import TodoItem from 'dir_src/components/TodoItem';

export default class TodoApp extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired,
  }

  constructor() {
    super();
  }

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
  }
}
