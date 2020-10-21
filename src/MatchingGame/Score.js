import React, { Component } from 'react';

export default class Score extends Component {
  render() {
    const { valueArray } = this.props;
    const totalScore = valueArray.length;
    return <div className="score"></div>;
  }
}
