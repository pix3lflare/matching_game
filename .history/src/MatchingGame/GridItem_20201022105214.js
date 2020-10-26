import React from 'react';

class GridItem extends React.Component {
  render() {
    //https://picsum.photos/id/797/200/300
    const { item, selectItem, selectedItems } = this.props;
    return (
      <div
        className={
          selectedItems.indexOf(item.id) >= 0 || item.matched
            ? 'grid-item flipped'
            : 'grid-item'
        }
        onClick={() => selectItem(item)}
      >
        <div className="value">{item.value}</div>
      </div>
    );
  }
}

export default GridItem;
