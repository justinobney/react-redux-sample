// Connected component
import React, {Component} from 'react';
import List from './List';
import Detail from './Detail';

class Layout extends Component {
  displayName = 'Office Layout component'
  render() {
    return (
      <div>
        <h1>Office Layout</h1>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
export {List, Detail};
