// Connected component
import React, {Component} from 'react/addons';
import {connect} from 'react-redux';
import {Grid, ProgressBar} from 'react-bootstrap';
import TopNav from './TopNav';

class App extends Component {
  displayName = 'App component'
  render() {
    let loading = this.props.uiState.loading;
    return (
      <div>
        <TopNav />
        <Grid>
          <LoadingBar pending={loading.pending} complete={loading.complete} />
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

class LoadingBar extends Component {
  displayName = 'LoadingBar component'
  constructor(props) {
    super(props);
    this.state = {pending: props.pending || 0, complete: props.complete || 0};
  }
  componentWillReceiveProps(nextProps) {
    let {pending, complete} = nextProps;
    let setNextProps = ()=> this.setState({pending, complete});
    if (this.props.complete > 0 && complete === 0) {
      this.setState({
        pending: this.props.pending,
        complete: this.props.pending
      });

      setTimeout(setNextProps, 1000);
    } else {
      setNextProps();
    }
  }
  render() {
    let result = null;
    if (this.state.pending !== 0) {
      let percent = (this.state.complete / this.state.pending) * 100;
      if (percent < 10) {
        percent = 5;
      }
      result = (
        <ProgressBar active now={percent} />
      );
    }

    return result;
  }
}

export default connect((reducers)=> ({uiState: reducers.uiState}))(App);
