import React, { Component, PropTypes } from 'react';
import Header from './Header';
import MainSection from './MainSection';

export default class TodoApp extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Header addTodo={this.props.actions.addTodo} />
        <MainSection
          todos={this.props.todos}
          actions={this.props.actions} />
      </div>
    )
  }
}
