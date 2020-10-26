import React, { Component } from 'react'
import Score from './Score';
import Timer from './Timer';

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {gameMode,timeRemaining,valueArray,player1,player2, currentUser, requestedRounds, currentRound} = this.props
        const score1 = valueArray.filter((item)=> item.matched && item.matchedBy==1).length
        const score2 = valueArray.filter((item)=> item.matched && item.matchedBy==2).length
        const MaxScore = valueArray.length;
        return (
            gameMode === 'single' ? 

            <div className="header">
              <Timer timeRemaining={timeRemaining} />
              <div className="name">Matching Game</div>
              <Score valueArray={valueArray}/>
            </div>
            :
            <div className="header">
            <div className="playerStats">
              <div className={currentUser==1 ? "name bold" : "name"}>{player1.name} score {score1}/{MaxScore}</div>
              <div className='roundsWon'>Rounds Won:{player1.roundsWon}</div>
              </div>
              <div className='round-wrap'>
                <div className="name">Round</div>
                <div className='round'>{currentRound} of {requestedRounds}</div>
              </div>
              <div className="playerStats">
              
                <div className={currentUser==2 ? "name bold" : "name"}>{player2.name} score {score2}/{MaxScore}</div>
                <div className='roundsWon'>Rounds Won:{player2.roundsWon}</div>
              
              </div>

            </div>
        )
    }
}
