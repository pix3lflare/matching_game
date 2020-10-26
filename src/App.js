import React from 'react';
import './App.css';
import './dashboard.scss';
import MatchingGame from './MatchingGame';
import Dashboard from './Dashboard';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
      </div>
    );
  }
}

export default App;
