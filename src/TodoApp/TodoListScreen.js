import React from 'react';
import {
  Container,
  Button,
  AppBar,
  Toolbar,
  Avatar,
  Checkbox,
  TextField,
} from '@material-ui/core';
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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchTodoItems,
  saveTodoItem,
  deleteTodoItem,
  setTodoModal,
  setModalItem,
  completeItem,
} from '../reducers/TodoSlice';
import { logout } from '../reducers/AuthSlice';

class TodoModal extends React.Component {
  render() {
    const { open, handleClose, handleSave, item, updateItem } = this.props;

    return item ? (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Todo</DialogTitle>
        <DialogContent>
          <TextField
            className="modal-field"
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            value={item.description}
            onChange={(e) => updateItem(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    ) : null;
  }
}

class TodoItem extends React.Component {
  render() {
    const { item, editItem, deleteItem, completeItem } = this.props;

    return (
      <div className={item.isComplete ? 'todo-item completed' : 'todo-item'}>
        <div className="left">
          <Checkbox />
          <div className="description">{item.description}</div>
        </div>
        <div className="right">
          <div className="complete-btn" onClick={completeItem}>
            Completed
          </div>
          <EditIcon onClick={editItem} />
          <HighlightOffIcon onClick={deleteItem} />
        </div>
      </div>
    );
  }
}

class TodoListScreen extends React.Component {

  componentDidMount() {
    this.props.fetchTodoItems();
  }

  render() {
    const { showTodoModal, setModalItem, modalItem, setTodoModal } = this.props;
    const todoItems = this.props.todoList.map((item) => (
      <TodoItem
        key={item._id}
        item={item}
        editItem={() => {
          setModalItem(item);
          setTodoModal(true);
        }}
        deleteItem={() => this.props.deleteTodoItem(item._id)}
        completeItem={() => this.props.completeItem(item)}
      />
    ));

    return (
      <Container className="todo-dashboard">
        {/*  Modals */}
        <TodoModal
          open={showTodoModal}
          item={modalItem}
          handleClose={() => {
            this.props.setTodoModal(false);
          }}
          handleSave={() => {
            this.props.saveTodoItem(modalItem);
            this.props.setTodoModal(false);
          }}
          updateItem={(description) => {
            const updatedModalItem = Object.assign({}, modalItem, {
              description,
            });
            setModalItem(updatedModalItem)
          }}
        />

        {/* App Bar */}
        <AppBar position="static">
          <Toolbar className="tool-bar">
            {/* App Title */}
            <div className="app-title">
              <ListAltIcon />
              <div className="name">Todo App</div>
            </div>

            {/* Search Bar */}
            <div className="search-bar">
              <SearchIcon />
              <input type="text" />
            </div>

            {/* Super Nav */}
            <div className="super-nav">
              <div className="toggle">
                <Avatar className="avatar">S</Avatar>
                <div className="username">Steven L.</div>
                <KeyboardArrowDownIcon className="chevron" />
              </div>

              <div className="super-dd-menu">
                <div className="dd-item">
                  <SettingsIcon />
                  <label>Settings</label>
                </div>
                <div className="dd-item" onClick={this.props.logout}>
                  <ExitToAppIcon />
                  <label>Logout</label>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        {/* List Container */}
        <div className="list-container">
          <div className="todo-list">{todoItems}</div>

          <div className="control-bar">
            <div className="left">
              <Button
                variant="contained"
                color="primary"
                className="btn create-btn"
                onClick={() => {
                  const modalItem = {
                    _id: null,
                    description: '',
                    isComplete: false,
                  };
                  setTodoModal(true);
                  setModalItem(modalItem);
                }}
              >
                New Todo
              </Button>
            </div>

            <div className="right">
              <Button variant="contained" color="primary" className="btn">
                Complete
              </Button>
              <Button variant="contained" color="secondary" className="btn">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    todoList: state.todo.todoList,
    showTodoModal: state.todo.showTodoModal,
    modalItem: state.todo.modalItem,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTodoItems,
      saveTodoItem,
      deleteTodoItem,
      logout,
      setTodoModal,
      setModalItem,
      completeItem,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
