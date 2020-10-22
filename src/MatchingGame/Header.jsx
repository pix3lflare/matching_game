import React, { Component } from 'react'
import Score from './Score';
import Timer from './Timer';

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {gameMode,timeRemaining,valueArray,player1,player2} = this.props
        console.log(gameMode)
        return (
            gameMode === 'single' ? 

            <div className="header">
              <Timer timeRemaining={timeRemaining} />
              <div className="name">Matching Game</div>
              <Score valueArray={valueArray}/>
            </div>
            :
            <div className="header">
              <div className="name">{player1.name} score 0/16</div>
              <div className="name">Matching Game</div>
              <div className="name">{player2.name} score 0/16</div>
              
            </div>
        )
    }
}
