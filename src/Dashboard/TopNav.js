import React, { Component } from 'react';
import ThemeSelector from './ThemeSelector'

export default class TopNav extends Component {
  render() {
    const {theme, updateTheme} = this.props
    return (
      <div className={`top-nav ${theme}`}>
        <div className="name">Dashboard</div>
        <ThemeSelector theme={theme} updateTheme={updateTheme}/>
      </div>
    );
  }
}
