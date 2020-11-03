import { combineReducers } from 'redux'
import { authSlice } from './AuthSlice.js'
import { todoSlice } from './TodoSlice.js'


export default combineReducers({
  auth: authSlice.reducer,
  todo: todoSlice.reducer,
})