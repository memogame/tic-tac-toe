import React from 'react';
import Item from './Item';

class Board extends React.Component {
  constructor() {
    super();
    this.lineToHtml = this.lineToHtml.bind(this);
  }
  lineToHtml(line) {
    return (<div>{line.map((value) => <Item value={value} />)}</div>)
  }
  render() {
    return (
      <div>
        {this.props.data.map(this.lineToHtml)}
      </div>)
  }
}

export default Board;