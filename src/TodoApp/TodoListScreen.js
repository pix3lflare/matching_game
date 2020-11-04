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
  constructor(props) {
    super(props);
    this.state = {
      modalItem: null,
    };
  }

  componentDidMount() {
    this.props.fetchTodoItems();
  }

  completeItem = async (item) => {
    const { token } = this.props;
    const updatedItem = Object.assign({}, item, { isComplete: true });
    const updateUrl = 'http://localhost:9000/api/todos/';
    const response = await fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedItem),
    });

    const todoList = this.state.todoList.map((i) => {
      if (i._id == updatedItem._id) {
        return updatedItem;
      }

      return i;
    });
    this.setState({ todoList });
  };

  render() {
    const todoItems = this.props.todoList.map((item) => (
      <TodoItem
        key={item._id}
        item={item}
        editItem={() => {
          this.props.setTodoModal(true);
          this.setState({ modalItem: item });
        }}
        deleteItem={() => this.props.deleteTodoItem(item._id)}
        completeItem={() => this.completeItem(item)}
      />
    ));
    const { modalItem } = this.state;
    const { showTodoModal } = this.props;
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
            this.setState({ modalItem: updatedModalItem });
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
                  this.props.setTodoModal(true);
                  this.setState({ modalItem });
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
