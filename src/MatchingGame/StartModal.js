import React from 'react'

export default class StartModal extends React.Component{
    render(){
        return(
            <div className='modal-screen'>
                <div className='modal'>
                    <div className='title'>Start New Game</div>
                    <div className='button' onClick={this.props.startNewGame}>Begin</div>
                </div>
            </div>
        )
    }
}