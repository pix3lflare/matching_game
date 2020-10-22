import React from 'react';
import './App.css';
import MatchingGame from './MatchingGame';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MatchingGame rowCount={3} columnCount={2} />
      </div>
    );
  }
}

export default App;
