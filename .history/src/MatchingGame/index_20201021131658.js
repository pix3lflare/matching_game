import React from 'react';
import '../matching_game.scss';
import GameGrid from './GameGrid';
import Score from './Score';
import { v4 as uuidv4 } from 'uuid';


class MatchingGame extends React.Component {
  state = {
    valueArray: [],
    selectedItems: [],
  };

  componentDidMount() {
    const { rowCount, columnCount } = this.props;
    const num = (rowCount * columnCount) / 2;
    const valueArray = [];

    for (let i = 0; i < num; i++) {
      let randomNum = Math.floor(Math.random() * 100 + 1);
      while (valueArray.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * 100 + 1);
      }

      const item1 = {
        id: uuidv4(),
        value: randomNum,
        matched: false,
      };

      const item2 = {
        id: uuidv4(),
        value: randomNum,
        matched: false,
      };

      valueArray.push(item1);
      valueArray.push(item2);
    }
    valueArray.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    this.setState({ valueArray });
  }

  selectItem = (item) => {
    const selectedItems = this.state.selectedItems.concat(item.id);
    const items = this.state.valueArray.filter(
      (i) => selectedItems.indexOf(i.id) >= 0
    );

    if (items.length == 2) {
      if (items[0].value == items[1].value) {
        console.log('Found a Match');
        const valueArray = this.state.valueArray.map((i) => {
          if (i.id === items[0].id || i.id === items[1].id) {
            return Object.assign({}, i, { matched: true });
          }
          return i;
        });

        this.setState({ valueArray });
      } else {
        console.log('Not a Match');
      }

      setTimeout(() => {
        console.log('Clear Selected Items');
        this.setState({ selectedItems: [] });
      }, 500);
    }

    this.setState({
      selectedItems,
    });
  };
  render() {
    const { rowCount, columnCount } = this.props;

    return (
      <div className="matching-game">
        <div className="header">
          <div className="time">45secs</div>
          <div className="name">Matching Game</div>
          <Score valueArray={this.state.valueArray}/>
        </div>
        <div className="grid-wrap">
          <GameGrid 
          valueArray={this.state.valueArray}
          selectItem={this.selectItem}
          selectedItems={this.state.selectedItems}
          rowCount={rowCount} columnCount={columnCount} />
        </div>
      </div>
    );
  }
}

export default MatchingGame;
