import React from 'react';
import '../matching_game.scss';
import GameGrid from './GameGrid';
import Score from './Score';
import Timer from './Timer';
import StartModal from './StartModal'
import WinModal from './WinModal'
import LoseModal from './LoseModal'
import { v4 as uuidv4 } from 'uuid';


class MatchingGame extends React.Component {

  state = {
    valueArray: [],
    selectedItems: [],
    timeRemaining: 60,
    showStartModal: true,
    showWinModal: false,
    showLoseModal: false,
    gameRunning: false,
  };

  startNewGame = () => {
    console.log('Start New Game')

    // Initialize Grid Values
    const { rowCount, columnCount } = this.props;
    const num = (rowCount * columnCount) / 2;
    const valueArray = [];

    for (let i = 0; i < num; i++) {
      let randomNum = Math.floor(Math.random() * 100 + 1);
      while (valueArray.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * 100 + 1);
      }

      const item1 = {
        id: uuidv4(),
        value: `https://picsum.photos/id/${randomNum}/120/120`,
        matched: false,
      };

      const item2 = {
        id: uuidv4(),
        value: `https://picsum.photos/id/${randomNum}/120/120`,
        matched: false,
      };

      valueArray.push(item1);
      valueArray.push(item2);
    }
    valueArray.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    // Set Initial State and then begin Timer Countdown
    this.setState({
        valueArray,
        selectedItems: [],
        timeRemaining: 60,
        showStartModal: false,
        showWinModal: false,
        showLoseModal: false,
        gameRunning: true,
     }, () => {
            // Begin Count Down
            this.timerInterval = setInterval(() => {
              let timeRemaining = this.state.timeRemaining - 1;
              if(timeRemaining >= 0 && this.state.gameRunning) {
                this.setState({ timeRemaining });
                if (timeRemaining == 0) {
                  clearInterval(this.timerInterval)
                  this.gameLost();
                }
              }
            }, 1000);
     });
  }

  gameLost = () => {
      console.log('Game Lost');
      this.setState({
        gameRunning: false,
        showLoseModal: true,
      })
  };

  selectItem = item => {
    const selectedItems = this.state.selectedItems.concat(item.id);
    const items = this.state.valueArray.filter(
      i => selectedItems.indexOf(i.id) >= 0
    );

    if (items.length === 2) {
      if (items[0].value === items[1].value) {
        console.log('Found a Match');
        const valueArray = this.state.valueArray.map(i => {
          if (i.id === items[0].id || i.id === items[1].id) {
            return Object.assign({}, i, { matched: true });
          }
          return i;
        });

        let totalMatches = valueArray.filter((i)=>i.matched==true)

        if( valueArray.length == totalMatches.length ){
            console.log('All Matches Found')
            this.setState({valueArray, gameRunning: false, showWinModal: true});
        }else{
            this.setState({valueArray});
        }

      } else {
        console.log('Not a Match');
      }

      setTimeout(() => {
        console.log('Clear Selected Items');
        this.setState({ selectedItems: [] });
      }, 500);
    }

    this.setState({
      selectedItems,
    });
  };
  render() {
    console.log('Index.js state', this.state);
    const { rowCount, columnCount } = this.props;
    const {showStartModal, showWinModal, showLoseModal} = this.state

    return (
      <div className="matching-game">

        {/* Modals */}
        {showStartModal && <StartModal startNewGame={this.startNewGame}/>}
        {showWinModal && <WinModal  startNewGame={this.startNewGame}/>}
        {showLoseModal && <LoseModal  startNewGame={this.startNewGame}/>}

        {/* Game */}
        <div className="header">
          <Timer timeRemaining={this.state.timeRemaining} />
          <div className="name">Matching Game</div>
          <Score
            valueArray={this.state.valueArray}
          />
        </div>

        <div className="grid-wrap">
          <GameGrid
            valueArray={this.state.valueArray}
            selectItem={this.selectItem}
            selectedItems={this.state.selectedItems}
            rowCount={rowCount}
            columnCount={columnCount}
          />
        </div>
      </div>
    );
  }
}

export default MatchingGame;
