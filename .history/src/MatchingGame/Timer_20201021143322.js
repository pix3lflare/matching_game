import React from 'react'

class Timer extends React.Component{

  render() {
    return(
      
      <div className='timer'>
      Hello I'm a timer here <div>{this.props.timeRemain}</div>
      </div>)
  }
}


export default Timer