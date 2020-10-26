import React, { Component } from 'react';
import {ThemeContext} from './theme_context'

export default class ThemeSelector extends Component {
  static contextType = ThemeContext;

  render() {
    const {theme, updateTheme} = this.context

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
