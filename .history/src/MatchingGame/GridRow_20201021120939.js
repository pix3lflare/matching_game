import React from 'react';
import GridItem from './GridItem'


class GridRow extends React.Component{
  render(){
      const {columnCount,values} = this.props
      const gridItems = []
      for( let i = 0; i < columnCount; i++ ){
          gridItems.push(<GridItem value= {values[i]} />)
      }
      return (
          <div className='grid-row'>
              {gridItems}
          </div>
      )
  }
}


export default GridRow