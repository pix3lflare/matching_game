import React, { Component } from 'react';


export default class NavBtn extends Component {

  render() {
    const icon = this.props.icon
    const theme = this.context.theme

    return (
      <div className={`nav-btn`} onClick={this.props.onClick}>
        {icon}
        <label>{this.props.label}</label>
      </div>
    );
  }
}
