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
  }
})

export const { setToken } = authSlice.actions