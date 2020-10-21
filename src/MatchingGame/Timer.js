import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    return <div className="time">{this.props.timeRemaining}</div>;
  }
}
