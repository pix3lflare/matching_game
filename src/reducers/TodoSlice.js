import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Async Functions
export const fetchTodoItems = createAsyncThunk(
  'fetchTodoItems',
  async (args, thunkAPI) => {
    const token = thunkAPI.getState().auth.token
    const fetchUrl = 'http://localhost:9000/api/todos/'
    const response = await fetch(fetchUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    let todoList = await response.json()
    return todoList
  }
)


export const saveTodoItem = createAsyncThunk(
  'saveTodoItem',
  async (todoItem, thunkAPI) => {
    console.log('Todo Item: ', todoItem)
    const token = thunkAPI.getState().auth.token
    const createUrl = 'http://localhost:9000/api/todos/'
    const response = await fetch(createUrl, {
        method: todoItem._id ? 'PATCH' : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(todoItem)
    });

    let todoList = []
    if( todoItem._id ){
        todoList = thunkAPI.getState().todo.todoList.map((item) => {
            if( item._id == todoItem._id ){
                return todoItem
            }
            return item
        })
    }else{
        let newTodoItem = await response.json()
        todoList = thunkAPI.getState().todo.todoList.concat(newTodoItem)
    }

    return todoList
  }

)


//
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },

  reducers: {
    setToken: (state, { payload }) => {
       state.token = payload.token
    },
  },

  extraReducers: {
    [fetchTodoItems.fulfilled]: (state, action) => {
        state.todoList = action.payload
    },
    [saveTodoItem.fulfilled]: (state, action) => {
        state.todoList = action.payload
    },
  }

})

export const { setToken } = todoSlice.actions