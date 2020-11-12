import React, { Component } from 'react'
import NavBtn from './NavBtn'
import {ThemeContext} from './theme_context'

export default class SideNav extends Component {
    render() {
        return (
            <div className={`side-nav`}>
                    Side Nav
                {/*

                <NavBtn
                    icon={<i class="fas fa-users"></i>}
                    label='Users'
                />

                <NavBtn
                    icon={<i class="fas fa-envelope"></i>}
                    label='Messages'
                />

                <NavBtn
                    icon={<i class="fas fa-chart-bar"></i>}
                    label='Analytics'
                />

                <NavBtn
                    icon={<i class="fas fa-cog"></i>}
                    label='Settings'
                />
                */}
            </div>
        )
    }
}
