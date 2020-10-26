import React, { Component } from 'react';

export default class Score extends Component {
  render() {
    const { valueArray } = this.props;
    const MaxScore = valueArray.length;

    const matched = valueArray.filter(item => {
      return item.matched === true;
    });

    return (
      <div className="score">
        {matched.length}/{MaxScore}
      </div>
    );
  }
}
