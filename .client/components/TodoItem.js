import React from 'react';
import classnames from 'classnames';
import TodoEdit from 'dir_src/components/TodoEdit';

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: React.PropTypes.object.isRequired,
    editTodo: React.PropTypes.func.isRequired,
    deleteTodo: React.PropTypes.func.isRequired,
    completeTodo: React.PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

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
  }
}
