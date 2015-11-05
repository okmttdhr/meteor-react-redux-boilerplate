import React from 'react';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element,
  }

  render () {
    return (
      <div className='CoreLayout'>
        <div className='CoreLayout__viewContainer'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
