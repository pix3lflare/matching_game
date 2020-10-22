import React from 'react'

export default class StartModal extends React.Component{
    render(){
        const {gameMode, setGameMode, player1, player2, updatePlayer1, updatePlayer2, startNewGame, requestedRounds, updateRequestedRounds} = this.props

        return(
            <div className='modal-screen'>

                {gameMode==null &&
                    <div className='modal'>
                        <div className='title'>Start New Game</div>
                        <div className='button' onClick={()=>setGameMode('single')}>Single Player</div>
                        <div className='button' onClick={()=>setGameMode('two')}>Two Players</div>
                    </div>
                }

                { gameMode=='single' &&
                    <div className='modal'>
                        <div className='title'>Single Player Mode</div>
                        <div className='button' onClick={startNewGame}>Begin</div>
                    </div>
                }

               { gameMode=='two' &&
                    <div className='modal'>
                        <div className='title'>Two Player Mode</div>

                        <input
                            type='text'
                            placeholder='Player1 Name'
                            value={player1.name}
                            onChange={(e)=>updatePlayer1('name', e.target.value)}
                        />

                        <input
                            type='text'
                            placeholder='Player2 Name'
                            value={player2.name}
                            onChange={(e)=>updatePlayer2('name', e.target.value)}
                        />
                        <input
                            type='number'
                            value={requestedRounds}
                            onChange={(e)=>updateRequestedRounds(e.target.value)}
                        />
                        <div className='button' onClick={startNewGame}>Begin</div>
                    </div>
                }

            </div>
        )

    }
}