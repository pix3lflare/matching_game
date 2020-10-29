import React from 'react';
import { Container, Button, AppBar, Toolbar, Avatar, Checkbox} from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


//Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTliOWE2NTg4NTlmMGMwMTZmYTlhZiIsImVtYWlsIjoidXNlcjFAdGVzdC5jb20iLCJpYXQiOjE2MDM5ODI3MTgsImV4cCI6MTYwMzk4NjMxOH0.aG5v3dnGTTrg_c6rTyRjj9IwAjyzT8J5-Z7TEWAVVvU

class TodoItem extends React.Component{
    render(){
        return (
            <div className='todo-item'>

                <div className='left'>
                    <Checkbox/>
                    <div className='description'>Todo Item</div>
                </div>

                <div className='right'>
                    <EditIcon/>
                    <HighlightOffIcon/>
                </div>

            </div>
        )
    }
}


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

                {/* List Container */}
                <div className='list-container'>

                    <div className='todo-list'>
                        <TodoItem/>
                        <TodoItem/>
                        <TodoItem/>
                        <TodoItem/>
                        <TodoItem/>
                    </div>

                    <div className='control-bar'>
                        <Button variant="contained" color="primary" className='btn'>Complete</Button>
                        <Button variant="contained" color="secondary" className='btn'>Delete</Button>
                    </div>

                </div>

            </Container>
        )
    }
}