import React, { Component } from 'react'
import NavBtn from './NavBtn'

export default class SideNav extends Component {
    render() {
        const theme=this.props.theme
        return (
            <div className={`side-nav ${theme}`}>

                        <NavBtn 
                        icon={<i class="fas fa-user"></i>}
                        label='Profile'
                        theme={theme}
                        />
                        <NavBtn 
                        icon={<i class="fas fa-users"></i>}
                        label='Users'
                        theme={theme}
                        />
                        <NavBtn 
                        icon={<i class="fas fa-envelope"></i>}
                        label='Messages'
                        theme={theme}
                        />
                        <NavBtn 
                        icon={<i class="fas fa-chart-bar"></i>}
                        label='Analytics'
                        theme={theme}
                        />
                        <NavBtn 
                        icon={<i class="fas fa-cog"></i>}
                        label='Settings'
                        theme={theme}
                        />


                    </div>
        )
    }
}
