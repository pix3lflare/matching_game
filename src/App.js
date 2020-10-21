import React from 'react';
import MatchingGame from './MatchingGame';
import './App.css';

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
