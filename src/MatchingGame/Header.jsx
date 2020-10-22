import React, { Component } from 'react'
import Score from './Score';
import Timer from './Timer';

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {gameMode,timeRemaining,valueArray,player1,player2, currentUser} = this.props
        const score1 = valueArray.filter((item)=> item.matched && item.matchedBy==1).length
        const score2 = valueArray.filter((item)=> item.matched && item.matchedBy==2).length

        return (
            gameMode === 'single' ? 

            <div className="header">
              <Timer timeRemaining={timeRemaining} />
              <div className="name">Matching Game</div>
              <Score valueArray={valueArray}/>
            </div>
            :
            <div className="header">
              <div className={currentUser==1 ? "name bold" : "name"}>{player1.name} score {score1}/16</div>
              <div className='round-wrap'>
                  <div className="name">Round</div>
                  <div className='round'>1 of 3</div>
              </div>
              <div className={currentUser==2 ? "name bold" : "name"}>{player2.name} score {score2}/16</div>
            </div>
        )
    }
}
