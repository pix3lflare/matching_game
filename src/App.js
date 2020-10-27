import React from 'react';
import './App.css';
import './dashboard.scss';
import './todo_app.scss';
import MatchingGame from './MatchingGame';
import Dashboard from './Dashboard';
import TodoApp from './TodoApp'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }
}

export default App;
