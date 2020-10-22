import React from 'react'
import GridRow from './GridRow'
import { v4 as uuidv4 } from 'uuid';


class GameGrid extends React.Component{



    render(){
        const {rowCount, columnCount} = this.props
        const {valueArray, selectedItems} = this.state

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
                selectItem={this.selectItem}
                selectedItems={selectedItems}
            />)
        }

        return gridRows
    }
}

export default GameGrid