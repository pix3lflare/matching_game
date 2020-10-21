import React from 'react';
import GridItem from './GridItem';

class GridRow extends React.Component {
  render() {
    const { columnCount, values } = this.props;
    const gridItems = [];
    for (var i = 0; i < columnCount; i++) {
      gridItems.push(<GridItem value={values[i]} />);
    }

class GridRow extends React.Component{
  render(){
      const {columnCount, values, selectItem, selectedItems} = this.props
      const gridItems = []
      for( var i = 0; i < columnCount; i++ ){
          const item = values[i]
          gridItems.push(<GridItem
                item={item}
                selectItem={selectItem}
                selectedItems={selectedItems}
            />
          )
      }
      return (
          <div className='grid-row'>
              {gridItems}
          </div>
      )
  }
}

export default GridRow;
