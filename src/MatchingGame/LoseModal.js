import React from 'react'

export default class StartModal extends React.Component{
    render(){
        return(
            <div className='modal-screen'>
                <div className='modal'>
                    <div className='title'>You Lost Game</div>
                    <div className='button'>Play Again?</div>
                </div>
            </div>
        )
    }
}