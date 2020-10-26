import React from 'react'

export default class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard'>

                <div className='top-nav light'>
                    <div className='name'>Dashboard</div>
                    <div className='theme-selector'>
                        <label>Dark Theme</label>
                        <div className='dd-menu'>
                            <div className='dd-item light'>Dark Theme</div>
                            <div className='dd-item light'>Light Theme</div>
                        </div>
                    </div>
                </div>

                <div className='content-section'>
                    <div className='side-nav light'>

                        <div className='nav-btn light'>
                            <i class="fas fa-user"></i>
                            <label>Profile</label>
                        </div>

                        <div className='nav-btn'>
                            <i class="fas fa-users"></i>
                            <label>Users</label>
                        </div>

                        <div className='nav-btn'>
                            <i class="fas fa-envelope"></i>
                            <label>Messages</label>
                        </div>

                        <div className='nav-btn'>
                            <i class="fas fa-chart-bar"></i>
                            <label>Analytics</label>
                        </div>

                        <div className='nav-btn'>
                            <i class="fas fa-cog"></i>
                            <label>Settings</label>
                        </div>

                    </div>
                    <div className='content-pane light'>Content</div>
                </div>
            </div>
        )
    }
}