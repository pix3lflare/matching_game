import React from 'react';

class GridItem extends React.Component {
  render() {
    //https://picsum.photos/id/237/200/300
    //https://picsum.photos/id/<:id>/<:width>/<:height>
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
        <img src={item.value} alt="..."/>
       

      </div>
    );
  }
}

export default GridItem;
