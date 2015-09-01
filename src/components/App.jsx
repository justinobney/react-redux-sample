// Connected component
import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import TopNav from './TopNav';

class App extends Component {
  displayName = 'App component'
  render() {
    return (
      <div>
        <TopNav />
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default App;
