import React, { Component } from 'react'
import NavBtn from './NavBtn'
import {ThemeContext} from './theme_context'

export default class SideNav extends Component {
    static contextType = ThemeContext;

    render() {
        const theme=this.context.theme

        return (
            <div className={`side-nav ${theme}`}>

                <NavBtn
                    icon={<i class="fas fa-user"></i>}
                    label='Profile'
                    onClick={()=>{
                        fetch("http://localhost:9000/testAPI/")
                        .then(res => res.text())
                        .then(res => {
                            console.log('Response')
                            console.log(res)
                        });
                    }}
                />

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

            </div>
        )
    }
}
