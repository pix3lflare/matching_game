import React from 'react'

class Timer extends React.Component{

  render() {
    return(
      
      <div className='timer'>
      Hello I'm a timer here <div>{this.props.t}</div>
      </div>)
  }
}


export default Timer