// Connected component
import React, {Component} from 'react/addons';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';
import TopNav from './TopNav';
import LoadingBar from './shared/LoadingBar';

class App extends Component {
  displayName = 'App component'
  render() {
    let loading = this.props.uiState.loading;
    return (
      <div>
        <TopNav />
        <Grid>
          {this.props.children}
        </Grid>
        <LoadingBar pending={loading.pending} complete={loading.complete} />
      </div>
    );
  }
}

export default connect((reducers)=> ({uiState: reducers.uiState}))(App);
