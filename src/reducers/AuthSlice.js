import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload.token
    },
    logout: (state, { payload }) => {
      state.token = null
    },
  }
})

export const { setToken, logout } = authSlice.actions