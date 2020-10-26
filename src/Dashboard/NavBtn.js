import React, { Component } from 'react';

export default class NavBtn extends Component {

  render() {
      const icon = this.props.icon
      const theme = this.props.theme
    return (
      <div className={`nav-btn ${theme}`} >
        {icon}
        <label>{this.props.label}</label>
      </div>
    );
  }
}
