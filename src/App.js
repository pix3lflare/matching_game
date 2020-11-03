import React from 'react';
import './App.css';
import './dashboard.scss';
import './todo_app.scss';
import MatchingGame from './MatchingGame';
import Dashboard from './Dashboard';
import TodoApp from './TodoApp'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
)

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

