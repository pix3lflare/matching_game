import React, { Component } from 'react'
import SideNav from './SideNav'

export default class Content extends Component {
    render() {
        const theme = this.props.theme
        return (
            <div className='content-section'>
                    <SideNav 
                    theme= {theme}
                    />
                    <div className={`content-pane ${theme}`}>Content</div>
                </div>
        )
    }
}
