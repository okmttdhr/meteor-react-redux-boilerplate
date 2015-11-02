import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoApp from '../../components/TodoApp'
import * as TodoActions from '../../actions/TodoActions';

const actionCreators = {
  increment : () => ({ type : 'COUNTER_INCREMENT' }),
  ...TodoActions,
};

function mapStateToProps(state) {
  return {
    routerState: state.router,
    todos: state.todos.array,
    counter: state.counter,
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
    todos: React.PropTypes.array,
    counter: React.PropTypes.number,
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
        <h1>Welcome to the React Redux Starter Kit</h1>
        <button onClick={this.props.actions.increment}>Incrementttttttt</button>
        {this.props.counter}
        {JSON.stringify(this.data.todos)}
        <TodoApp
          todos={this.props.todos}
          actions={this.props.actions}/>
      </div>
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
