import React, { PropTypes } from 'react';
import classnames from 'classnames';
import TodoEdit from 'components/TodoEdit';

const TodoItem = React.createClass({
  propTypes: {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired,
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
    const {todo, markTodo, deleteTodo} = this.props;

    return (
      <li className={classnames({
        completed: todo.marked,
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
              checked={todo.marked}
              onChange={() => markTodo(todo._id)} />
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
