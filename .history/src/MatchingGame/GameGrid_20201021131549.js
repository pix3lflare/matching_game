import React from 'react'
import GridRow from './GridRow'


class GameGrid extends React.Component{



    render(){
        const {rowCount, columnCount,valueArray, selectedItems,selectItem} = this.props

        if( valueArray.length === 0 ){
            return null
        }

        const gridRows = []
        for( let i = 0; i < rowCount; i++ ){
            const startIndex = i * columnCount
            const endIndex = startIndex + columnCount
            gridRows.push(<GridRow
                columnCount={columnCount}
                values={valueArray.slice(startIndex,endIndex)}
                selectItem={selectItem}
                selectedItems={selectedItems}
            />)
        }

        return gridRows
    }
}

export default GameGrid