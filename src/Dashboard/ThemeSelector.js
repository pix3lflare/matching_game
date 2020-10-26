import React, { Component } from 'react';

export default class ThemeSelector extends Component {
  render() {
    const {theme, updateTheme} = this.props

    return (
      <div className="theme-selector">
         <label>{theme} Theme</label>
         <div className="dd-menu">
            <div className={`dd-item ${theme}`} onClick={()=>updateTheme('dark')}>Dark Theme</div>
            <div className={`dd-item ${theme}`} onClick={()=>updateTheme('light')}>Light Theme</div>
         </div>
      </div>
    );
  }
}
