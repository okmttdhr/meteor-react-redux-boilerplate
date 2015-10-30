import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const actionCreators = {
  increment : () => ({ type : 'COUNTER_INCREMENT' })
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    routerState: state.router,
    todos: state.todos,
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export class HomeView extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object,
    todos: React.PropTypes.object,
    counter: React.PropTypes.number,
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <button onClick={this.props.actions.increment}>Increment</button>
        {this.props.counter}
        {JSON.stringify(this.props.todos)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
