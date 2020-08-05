import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    };
    this.timeoutId = null;
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newDate = new Date(time.getTime());
      newDate.setSeconds(newDate.getSeconds() + 1);
      return {
        time: newDate,
      };
    });
  };

  start = () => {
    if (!this.state.isRunning) {
      this.setState({
        isRunning: true,
      });
    }
  };

  stop = () => {
    if (this.state.isRunning) {
      this.setState({
        isRunning: false,
      });
    }
  };

  clear = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };

  componentDidUpdate(prevProps, prevState) {
    const { isRunning } = this.state;
    this.clear();
    if (isRunning) {
      this.timeoutId = setTimeout(this.tick, 1000);
    }
  }

  componentWillUnmount() {
    this.clear();
  }

  componentDidMount() {
    this.start();
  }

  twoDigit(v) {
    return v > 9 ? v : `0${v}`;
  }

  render() {
    const { time, isRunning } = this.state;
    const hours = this.twoDigit(time.getHours());
    const minutes = this.twoDigit(time.getMinutes());
    const seconds = this.twoDigit(time.getSeconds());

    return (
      <article>
        <div>{`${hours}:${minutes}:${seconds}`}</div>
        <button disabled={isRunning} onClick={this.start}>
          start
        </button>
        <button disabled={!isRunning} onClick={this.stop}>
          stop
        </button>
        <button>reset</button>
      </article>
    );
  }
}

export default Stopwatch;
