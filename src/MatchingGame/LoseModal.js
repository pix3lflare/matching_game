import React from 'react';

export default class LoseModal extends React.Component {
  render() {
    return (
      <div className="modal-screen">
        <div className="modal">
          <div className="title">You Lost Game</div>
          <div className="button" onClick={this.props.startNewGame}>
            Play Again?
          </div>
        </div>
      </div>
    );
  }
}
