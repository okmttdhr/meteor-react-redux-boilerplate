import React from 'react';
import TodoEdit from 'dir_src/components/TodoEdit';

export default class TodoAdd extends React.Component {
  static propTypes = {
    addTodo: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
  }

  _addTodo(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
        <TodoEdit
          newTodo={true}
          onSave={::this._addTodo} />
      </header>
    );
  }
}
