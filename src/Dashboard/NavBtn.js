import React, { Component } from 'react';
import {ThemeContext} from './theme_context'

export default class NavBtn extends Component {
  static contextType = ThemeContext;

  render() {
    const icon = this.props.icon
    const theme = this.context.theme

    return (
      <div className={`nav-btn ${theme}`} >
        {icon}
        <label>{this.props.label}</label>
      </div>
    );
  }
}
