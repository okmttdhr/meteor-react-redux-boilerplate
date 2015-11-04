import React, { PropTypes, Component } from 'react';
import TodoEdit from './TodoEdit';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  _addTodo(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <TodoEdit
          newTodo={true}
          onSave={::this._addTodo}
          placeholder='What needs to be done?' />
      </header>
    );
  }
}
