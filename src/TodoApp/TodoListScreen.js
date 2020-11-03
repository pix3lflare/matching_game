import React from 'react';
import { Container, Button, AppBar, Toolbar, Avatar, Checkbox, TextField} from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SearchIcon from '@material-ui/icons/Search';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';




class TodoModal extends React.Component{

    render(){
        const {open, handleClose, handleSave, item, updateItem} = this.props

        return item ? (
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="form-dialog-title">Todo</DialogTitle>
                <DialogContent>
                      <TextField
                        className='modal-field'
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description"
                        value={item.description}
                        onChange={(e)=>updateItem(e.target.value)}
                        fullWidth
                      />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleSave} color="primary">Save</Button>
                </DialogActions>
              </Dialog>
         ): null;
    }
}


class TodoItem extends React.Component{
    render(){
        const {item, editItem, deleteItem, completeItem} = this.props

        return (
            <div className={item.isComplete ? 'todo-item completed' : 'todo-item'}>
                <div className='left'>
                    <Checkbox/>
                    <div className='description'>{item.description}</div>
                </div>
                <div className='right'>
                    <div className='complete-btn' onClick={completeItem}>Completed</div>
                    <EditIcon onClick={editItem}/>
                    <HighlightOffIcon onClick={deleteItem}/>
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
            showTodoModal:false,
            modalItem: null,
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

    handleSave = async () => {
        const {token, modalItem} = this.state
        const createUrl = 'http://localhost:9000/api/todos/'
        const response = await fetch(createUrl, {
            method: modalItem._id ? 'PATCH' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(modalItem)
        });

        let todoList = []
        if( modalItem._id ){
            todoList = this.state.todoList.map((item) => {
                if( item._id == modalItem._id ){
                    return modalItem
                }
                return item
            })
        }else{
            let newTodoItem = await response.json()
            todoList = this.state.todoList.concat(newTodoItem)
        }

        this.setState({showTodoModal: false, todoList})
    }

    deleteItem = async (itemID) => {
        const {token} = this.state
        const deleteUrl = 'http://localhost:9000/api/todos/'
        const response = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({_id:itemID})
        });

        const todoList = this.state.todoList.filter((item)=>item._id!=itemID)
        this.setState({todoList})
    }

    completeItem = async (item) => {
        const {token} = this.state
        const updatedItem = Object.assign({}, item, {isComplete: true})
        const updateUrl = 'http://localhost:9000/api/todos/'
        const response = await fetch(updateUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updatedItem)
        });

        const todoList = this.state.todoList.map((i)=>{
            if( i._id == updatedItem._id ){
                return updatedItem
            }

            return i
        })
        this.setState({todoList})
    }

    render(){
        const todoItems = this.state.todoList.map((item)=><TodoItem
            key={item._id}
            item={item}
            editItem={()=>{
                this.setState({modalItem: item, showTodoModal: true})
            }}
            deleteItem={()=>this.deleteItem(item._id)}
            completeItem={()=>this.completeItem(item)}
        />)
        const {showTodoModal, modalItem} = this.state
        return (
            <Container className='todo-dashboard'>

               {/*  Modals */}
               <TodoModal
                  open={showTodoModal}
                  item={modalItem}
                  handleClose={()=>{
                    this.setState({showTodoModal: false})
                  }}
                  handleSave={this.handleSave}
                  updateItem={(description)=>{
                    const updatedModalItem = Object.assign({}, modalItem, {description})
                    this.setState({modalItem: updatedModalItem})
                  }}
               />

               {/* App Bar */}
               <AppBar position="static">

                  <Toolbar className='tool-bar'>

                    {/* App Title */}
                    <div className='app-title'>
                        <ListAltIcon />
                        <div className='name'>Todo App</div>
                    </div>

                    {/* Search Bar */}
                    <div className='search-bar'>
                        <SearchIcon/>
                        <input type='text'/>
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

                        <div className='left'>
                            <Button
                                variant="contained"
                                color="primary"
                                className='btn create-btn'
                                onClick={()=>{
                                    const modalItem = {
                                        _id: null,
                                        description: '',
                                        isComplete: false,
                                    }
                                    this.setState({showTodoModal: true, modalItem})
                                }}
                              >New Todo</Button>
                        </div>

                        <div className='right'>
                            <Button variant="contained" color="primary" className='btn'>Complete</Button>
                            <Button variant="contained" color="secondary" className='btn'>Delete</Button>
                        </div>

                    </div>

                </div>

            </Container>
        )
    }
}