// Connected component
import React, {Component} from 'react/addons';
import {connect} from 'react-redux';
import {Grid, ProgressBar} from 'react-bootstrap';
import TopNav from './TopNav';

class App extends Component {
  displayName = 'App component'
  _showLoading() {
    let loading = this.props.uiState.loading;
    if (loading.pending !== 0) {
      let percent = (loading.complete / loading.pending) * 100;
      if (percent < 10) {
        percent = 5;
      }
      return (
        <ProgressBar active now={percent} />
      );
    }
  }
  render() {
    return (
      <div>
        <TopNav />
        <Grid>
          {:: this._showLoading()}
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default connect((reducers)=> { return {uiState: reducers.uiState}; })(App);
