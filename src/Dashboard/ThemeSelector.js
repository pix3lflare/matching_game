import React, { Component } from 'react';

export default class ThemeSelector extends Component {
  render() {
    const theme=this.props.theme
    return (
      <div className="theme-selector">
        <label>Dark Theme</label>
        <div className="dd-menu">
          <div className={`dd-item ${theme}`}>Dark Theme</div>
          <div className={`dd-item ${theme}`}>Light Theme</div>
        </div>
      </div>
    );
  }
}
