import React from 'react'
import GridRow from './GridRow'
import { v4 as uuidv4 } from 'uuid';


class GameGrid extends React.Component{

    state ={
       valueArray: [],
       selectedItems: [],
    }

    componentDidMount(){
        const {rowCount, columnCount} = this.props
        const num = (rowCount * columnCount) / 2
        const valueArray = []

        for( let i = 0; i < num; i++ ){
          let randomNum = Math.floor((Math.random() * 100) + 1)
          while (valueArray.includes(randomNum)) {
            randomNum = Math.floor((Math.random() * 100) + 1)
          }

          const item1 = {
            id: uuidv4(),
            value: randomNum,
            matched: false,
          }

          const item2 = {
            id: uuidv4(),
            value: randomNum,
            matched: false,
          }

          valueArray.push(item1)
          valueArray.push(item2)
        }
        valueArray.sort(function(a, b){return 0.5 - Math.random()});
        this.setState({valueArray})
    }

    selectItem = (item) => {
        const selectedItems = this.state.selectedItems.concat(item.id)
        const items = this.state.valueArray.filter( (i) => selectedItems.indexOf(i.id) >= 0 )

        if( items.length == 2 ){
            if( items[0].value == items[1].value ){
                console.log('Found a Match')
                const valueArray = this.state.valueArray.map((item) => {
                  if(item.id === items[0].id || item.id === ) {

                  }
                })

            }else{
                console.log('Not a Match')
            }

            setTimeout(()=>{
                console.log('Clear Selected Items')
                this.setState({selectedItems: []})
            }, 2000)

        }

        this.setState({
            selectedItems,
        })
    }

    render(){
        const {rowCount, columnCount} = this.props
        const {valueArray, selectedItems} = this.state

        if( valueArray.length === 0 ){
            return null
        }

        const gridRows = []
        for( var i = 0; i < rowCount; i++ ){
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