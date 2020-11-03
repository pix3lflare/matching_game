import React from 'react';
import './App.css';
import './dashboard.scss';
import './todo_app.scss';
import MatchingGame from './MatchingGame';
import Dashboard from './Dashboard';
import TodoApp from './TodoApp'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    valueList: [1, 2, 3, 4, 5],
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <TodoApp/>
          </div>
      </Provider>
    );
  }
}

export default App;

