import React from 'react';
import { Container, Button, AppBar, Toolbar, Avatar, Checkbox} from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


class TodoItem extends React.Component{
    render(){
        const {item} = this.props

        return (
            <div className='todo-item'>

                <div className='left'>
                    <Checkbox/>
                    <div className='description'>{item.description}</div>
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

    constructor(props){
        super(props)
        this.state = {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTliOWE2NTg4NTlmMGMwMTZmYTlhZiIsImVtYWlsIjoidXNlcjFAdGVzdC5jb20iLCJpYXQiOjE2MDM5ODY3MjAsImV4cCI6MTYwNDM0NjcyMH0.dvltXG_vxX_R5xZ4kbl2nv52NrFxwOuQFMfTQirQhgQ',
            todoList: [],
        }
    }

    componentDidMount(){
        this.fetchTodoItems()
    }

    fetchTodoItems = async () => {
        console.log('Fetch Todo Items')
        const {token} = this.state
        const fetchUrl = 'http://localhost:9000/api/todos/'
        const response = await fetch(fetchUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        let todoList = await response.json()
        console.log(todoList)
        this.setState({todoList})
    }

    render(){
        const todoItems = this.state.todoList.map((item)=><TodoItem key={item._id} item={item}/>)

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
                        {todoItems}
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