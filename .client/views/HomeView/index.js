import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoAction from '../../actions/Todo';
import MainSection from '../../components/MainSection'
import Header from '../../components/Header'

const actionCreators = {
  increment : () => ({ type : 'COUNTER_INCREMENT' }),
  ...TodoAction,
};

function mapStateToProps(state) {
  return {
    routerState: state.router,
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
        <Header addTodo={this.props.actions.addTodo} />
        <MainSection
          todos={this.data.todos}
          actions={this.props.actions} />
      </div>
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
