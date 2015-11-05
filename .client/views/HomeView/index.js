import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoAction from '../../actions/Todo';
import TodoApp from '../../components/TodoApp'
import Header from '../../components/Header'

const actionCreators = {
  ...TodoAction,
};

function mapStateToProps(state) {
  return {
    routerState: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export const HomeView = React.createClass({
  propTypes: {
    actions: React.PropTypes.object,
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      todos: Todos.find({}).fetch(),
    };
  },

  render () {
    console.log(this.props);
    return (
      <div className='container text-center'>
        <h1>Meteor React Redux Boilerplate</h1>
        {JSON.stringify(this.data.todos)}
        <Header addTodo={this.props.actions.addTodo} />
        <TodoApp
          todos={this.data.todos}
          actions={this.props.actions} />
      </div>
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
