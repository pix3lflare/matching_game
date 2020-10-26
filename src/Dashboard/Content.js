import React, { Component } from 'react'
import SideNav from './SideNav'
import {ThemeContext} from './theme_context'


export default class Content extends Component {
    static contextType = ThemeContext;

    render() {
        return (
         <div className='content-section'>
            <SideNav/>
            <div className={`content-pane ${this.context.theme}`}>Content Theme is: {this.context.theme}</div>
         </div>
        )
    }
}
