import React from 'react';
import '../matching_game.scss'
import GameGrid from './GameGrid'
import Score from './'

class MatchingGame extends React.Component{
  render(){
      const {rowCount, columnCount} = this.props

      return (
          <div className='matching-game'>
              <div className='header'>
                  <div className='time'>45secs</div>
                  <div className='name'>Matching Game</div>
                  <div className='score'>6/10</div>
              </div>
              <div className='grid-wrap'>
                  <GameGrid rowCount={rowCount} columnCount={columnCount}/>
              </div>
          </div>
      )
  }
}

export default MatchingGame