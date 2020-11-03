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
    }
  }

})

export const { setToken } = todoSlice.actions