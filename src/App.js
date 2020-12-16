import React from 'react';
import './App.css';
import './dashboard.scss';
import './todo_app.scss';
import MatchingGame from './MatchingGame';
import Dashboard from './Dashboard';
import UserDashboard from './Dashboard/UserDashboard';
import MessageDashboard from './Dashboard/MessageDashboard';
import TodoApp from './TodoApp'
import ImageUploader from './ImageUploader'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'


const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk)
)

let persistor = persistStore(store)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ImageUploader/>
      </Provider>
    );
  }
}

export default App;

