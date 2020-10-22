import React from 'react'

export default class WinModal extends React.Component{
    render(){
        const {valueArray, player1, player2, gameMode} = this.props
        const score1 = valueArray.filter((item)=> item.matched && item.matchedBy==1).length
        const score2 = valueArray.filter((item)=> item.matched && item.matchedBy==2).length

        return gameMode == 'single' ?
            <div className='modal-screen'>
                <div className='modal'>
                    <div className='title'>You Won Game</div>
                    <div className='button' onClick={this.props.startNewGame}>Play Again?</div>
                </div>
            </div> :
            (   score1 != score2 ?
                <div className='modal-screen'>
                    <div className='modal'>
                        <div className='title'>{ score1 > score2 ? player1.name : player2.name } Won Game</div>
                        <div className='button' onClick={this.props.startNewGame}>Play Again?</div>
                    </div>
                </div>:
                <div className='modal-screen'>
                    <div className='modal'>
                        <div className='title'>Its a Draw</div>
                        <div className='button' onClick={this.props.startNewGame}>Play Again?</div>
                    </div>
                </div>
            )
    }
}