import React, { Component } from 'react';
import ThemeSelector from './ThemeSelector'
import {ThemeContext} from './theme_context'

export default class TopNav extends Component {
  static contextType = ThemeContext;

  render() {
    const {theme} = this.context
    return (
      <div className='top-nav'>
        Top Nav
      </div>
    );
  }
}
