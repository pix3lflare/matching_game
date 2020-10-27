import React from 'react';
import { Container, Button, AppBar, Toolbar, Avatar} from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default class TodoListScreen extends React.Component{
    render(){
        return (
            <Container className='todo-dashboard'>

               {/* App Bar */}
               <AppBar position="static">

                  <Toolbar className='tool-bar'>

                    <div className='app-title'>
                        <ListAltIcon />
                        <div className='name'>Todo App</div>
                    </div>

                    {/* Super Nav */}
                    <div className='super-nav'>

                        <div className='toggle'>
                            <Avatar className='avatar'>S</Avatar>
                            <div className='username'>Steven L.</div>
                            <KeyboardArrowDownIcon className='chevron'/>
                        </div>

                        <div className='super-dd-menu'>
                            <div className='dd-item'>
                                <SettingsIcon/>
                                <label>Settings</label>
                            </div>
                            <div className='dd-item'>
                                <ExitToAppIcon/>
                                <label>Logout</label>
                            </div>
                        </div>

                    </div>

                  </Toolbar>

                </AppBar>

            </Container>
        )
    }
}