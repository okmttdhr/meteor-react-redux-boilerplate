import React from 'react';
import 'dir_src/styles/core.scss';

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
