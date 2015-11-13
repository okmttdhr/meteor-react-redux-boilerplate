import React, { PropTypes } from 'react';
import classnames from 'classnames';
import TodoEdit from 'dir_src/components/TodoEdit';

const TodoItem = React.createClass({
  propTypes: {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      editing: false,
    };
  },

  handleDoubleClick() {
    this.setState({ editing: true });
  },

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  },

  render() {
    const {todo, completeTodo, deleteTodo} = this.props;

    return (
      <li className={classnames({
        TodoItem: true,
        completed: todo.completed,
        editing: this.state.editing,
      })}>
        {this.state.editing ?
          <TodoEdit
            text={todo.text}
            editing={this.state.editing}
            onSave={(text) => this.handleSave(todo._id, text)} /> :
          <div className='view'>
            <input
              className='toggle'
              type='checkbox'
              checked={todo.completed}
              onChange={() => completeTodo(todo._id)} />
            <label onDoubleClick={this.handleDoubleClick}>
              {todo.text}
            </label>
            <button
              className='destroy'
              onClick={() => deleteTodo(todo._id)}>x</button>
          </div>}
      </li>
    );
  },
});

export default TodoItem;
