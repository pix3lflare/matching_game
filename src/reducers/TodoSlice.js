import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async Functions
export const fetchTodoItems = createAsyncThunk(
  'fetchTodoItems',
  async (args, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const fetchUrl = 'http://localhost:9000/api/todos/';
    const response = await fetch(fetchUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    let todoList = await response.json();
    return todoList;
  }
);

export const saveTodoItem = createAsyncThunk(
  'saveTodoItem',
  async (todoItem, thunkAPI) => {
    console.log('Todo Item: ', todoItem);
    const token = thunkAPI.getState().auth.token;
    const createUrl = 'http://localhost:9000/api/todos/';
    const response = await fetch(createUrl, {
      method: todoItem._id ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(todoItem),
    });

    let todoList = [];
    if (todoItem._id) {
      todoList = thunkAPI.getState().todo.todoList.map((item) => {
        if (item._id == todoItem._id) {
          return todoItem;
        }
        return item;
      });
    } else {
      let newTodoItem = await response.json();
      todoList = thunkAPI.getState().todo.todoList.concat(newTodoItem);
    }

    return todoList;
  }
);
export const deleteTodoItem = createAsyncThunk(
  'deleteTodoItem',
  async (itemID, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const deleteUrl = 'http://localhost:9000/api/todos/';
    const response = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ _id: itemID }),
    });
    const todoList = thunkAPI
      .getState()
      .todo.todoList.filter((item) => item._id != itemID);

    return todoList;
  }
);


export const completeItem = createAsyncThunk(
  'completeItem',
  async (item, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
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
  
    const todoList = thunkAPI
      .getState()
      .todo.todoList.map((i) => {
      if (i._id == updatedItem._id) {
        return updatedItem;
      }
  
      return i;
    });

    return todoList;

  }
) 




//
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
    showTodoModal: false,
    modalItem: null,
  },

  reducers: {
    setTodoModal: (state, action) => {
      state.showTodoModal = action.payload;
    },
    setModalItem: (state, action) => {
      state.modalItem = action.payload;
    }
  },

  extraReducers: {
    [fetchTodoItems.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
    [saveTodoItem.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
    [deleteTodoItem.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
    [completeItem.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    }
  },
});

export const { setTodoModal, setModalItem } = todoSlice.actions;
