import React, {Component} from 'react/addons';

export default class LoadingBar extends Component {
  displayName = 'LoadingBar component'
  timeoutId = null
  constructor(props) {
    super(props);
    let {pending, complete} = props;
    let percent = ((complete / pending) * 100) || 0;
    this.state = {percent};
  }
  componentWillReceiveProps(nextProps) {
    let {pending, complete} = nextProps;
    let percent = (complete / pending) * 100;

    if (pending > 0 && nextProps.pending > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => this.setNextProps(this.state.percent + 2), 200);
    }

    percent = (isNaN(percent) ? 0 : percent);
    if (pending > 0 && percent < 10) {
      percent = 5;
    }

    if (this.props.pending > 0 && complete === 0) {
      this.setNextProps(100);
      this.timeoutId = setTimeout(() => this.setNextProps(0), 1000);
    } else {
      this.setNextProps(percent);
    }
  }
  setNextProps(percent) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (percent === 100 && this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.setState({percent});
  }
  render() {
    let progressBarStyle = {
      width: `${this.state.percent}%`,
      display: this.state.percent > 0 ? 'block' : 'none',
      height: '4px',
      backgroundColor: '#f00',
      transition: 'width ease .5s'
    };
    return (
      <div className="loading-bar-container">
        <div className="loading-bar-progress" style={progressBarStyle}></div>
      </div>
    );
  }
}
