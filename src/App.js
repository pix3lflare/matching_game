import React from 'react';
import './App.css';
import MatchingGame from './MatchingGame';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MatchingGame rowCount={5} columnCount={6} />
      </div>
    );
  }
}

export default App;
