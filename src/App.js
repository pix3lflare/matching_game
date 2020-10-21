import React from 'react';
import logo from './logo.svg';
import './App.css';
import './matching_game.scss'

class GridItem extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          isFlipped: false,
      }
  }
  render(){
      const {isFlipped} = this.state
      const {value} = this.props
      return (
          <div
              className={isFlipped ? 'grid-item flipped' : 'grid-item'}
              onClick={()=>{
                  this.setState({isFlipped: !isFlipped})
              }}>
              <div className='value'>{value}</div>
          </div>
      )
  }
}
class GridRow extends React.Component{
  render(){
      const {columnCount,values} = this.props
      const gridItems = []
      for( var i = 0; i < columnCount; i++ ){
          gridItems.push(<GridItem value= {values[i]} />)
      }
      return (
          <div className='grid-row'>
              {gridItems}
          </div>
      )
  }
}
class MatchingGame extends React.Component{
        state ={
        array: [],
  }
  componentDidMount(){
        const {rowCount, columnCount} = this.props
        const num = (rowCount * columnCount) / 2
        const newarray = []
        for(let i = 0 ; i < num; i++ ){
          let randomNum = Math.floor((Math.random() * 100) + 1)
          while (newarray.includes(randomNum)) {
            randomNum = Math.floor((Math.random() * 100) + 1)
          }
          newarray.push(randomNum)
          newarray.push(randomNum)
        }
        newarray.sort(function(a, b){return 0.5 - Math.random()});
        this.setState({
          array: newarray
        })
  }
  render(){
      const {rowCount, columnCount} = this.props
      const gridRows = []
      for( var i = 0; i < rowCount; i++ ){
          const startIndex = i * columnCount
          const endIndex = startIndex + columnCount
          gridRows.push(<GridRow columnCount={columnCount} values={this.state.array.slice(startIndex,endIndex)} />)
      }
      return (
          <div className='matching-game'>
              <div className='header'>
                  <div className='time'>45secs</div>
                  <div className='name'>Matching Game</div>
                  <div className='score'>6/10</div>
              </div>
              <div className='grid-wrap'>
                  {gridRows}
              </div>
          </div>
      )
  }
}
class App extends React.Component{
     render(){
        return (
          <div className="App">
              <MatchingGame rowCount={5} columnCount={6}/>
          </div>
        );
     }
}


export default App;
