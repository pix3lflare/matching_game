import React from 'react';
import '../matching_game.scss';
import GameGrid from './GameGrid';
import Score from './Score';
import Timer from './Timer';
import StartModal from './StartModal'
import WinModal from './WinModal'
import LoseModal from './LoseModal'
import Header from './Header'
import { v4 as uuidv4 } from 'uuid';


class MatchingGame extends React.Component {

  state = {
    valueArray: [],
    selectedItems: [],
    timeRemaining: 60,
    gameMode: null,

    player1: {
        name: '',
    },

    player2: {
        name: ''
    },

    showStartModal: true,
    showWinModal: false,
    showLoseModal: false,
    gameRunning: false,

    currentUser: 1,
  };

  startNewGame = () => {

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
        matchedBy: null,
      };

      const item2 = {
        id: uuidv4(),
        value: `https://picsum.photos/id/${randomNum}/120/120`,
        matched: false,
        matchedBy: null,
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
            const {timeRemaining, gameRunning, gameMode} = this.state

            this.timerInterval = setInterval(() => {
              if(timeRemaining >= 0 && gameRunning && gameMode=='single') {
                this.setState({ timeRemaining:  timeRemaining - 1});
                if (timeRemaining === 0) {
                  clearInterval(this.timerInterval)
                  this.gameLost();
                }
              }
            }, 1000);
     });
  }

  gameLost = () => {
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
        const valueArray = this.state.valueArray.map(i => {
          if (i.id === items[0].id || i.id === items[1].id) {
            return Object.assign({}, i, { matched: true, matchedBy: this.state.currentUser });
          }
          return i;
        });

        let totalMatches = valueArray.filter((i)=>i.matched===true)

        if( valueArray.length === totalMatches.length ){
            console.log('All Matches Found')
            this.setState({valueArray, gameRunning: false, showWinModal: true});
        }else{
            this.setState({valueArray});
        }

      } else if( this.state.gameMode == 'two' ){
        const currentUser = this.state.currentUser == 1 ? 2 : 1;
        this.setState({currentUser})
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
    const { rowCount, columnCount } = this.props;
    const {showStartModal, showWinModal, showLoseModal, gameMode, player1, player2, gameRunning, currentUser} = this.state

    return (
      <div className="matching-game">

        {/* Modals */}
        {showStartModal && <StartModal
            gameMode={gameMode}
            startNewGame={this.startNewGame}
            setGameMode={(mode)=>{
                this.setState({gameMode: mode})
            }}
            player1={player1}
            player2={player2}

            updatePlayer1={(field, value)=>{
                const p1 = Object.assign({}, player1, {[field]: value})
                this.setState({player1: p1})
            }}

            updatePlayer2={(field, value)=>{
                const p2 = Object.assign({}, player2, {[field]: value})
                this.setState({player2: p2})
            }}
        />}
        {showWinModal && <WinModal  startNewGame={this.startNewGame}/>}
        {showLoseModal && <LoseModal  startNewGame={this.startNewGame}/>}

        {/* Game */}
        {gameRunning &&
            <Header 
            gameMode={gameMode}
            timeRemaining={this.state.timeRemaining}
            valueArray={this.state.valueArray}
            player1={player1}
            player2={player2}
            currentUser={currentUser}
            />
        }

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
