import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'
import Content from './Content'
import {ThemeContext} from './theme_context'


export default class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard'>
                <TopNav/>
                <div className='content-section'>
                    <SideNav/>
                    <div className='content-pane'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}