import React from 'react';

class GridItem extends React.Component {
  render() {
    const { item, selectItem, selectedItems } = this.props;
    return (
      <div
        className={
          selectedItems.indexOf(item.id) >= 0
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
