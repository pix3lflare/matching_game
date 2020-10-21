import React from 'react';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  render() {
    const { isFlipped } = this.state;
    const { value } = this.props;
    return (
      <div
        className={isFlipped ? 'grid-item flipped' : 'grid-item'}
        onClick={() => {
          this.setState({ isFlipped: !isFlipped });
        }}
      >
        <div className="value">{value}</div>
      </div>
    );
  }
}

export default GridItem;
