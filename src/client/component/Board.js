import React from 'react';
import Item from './Item';

class Board extends React.Component {
  constructor() {
    super();
    this.lineToHtml = this.lineToHtml.bind(this);
  }

  lineToHtml(line, row) {
    return (<div key={row}>{line.map((value, col) => <Item key={col} value={value} onItemClick={this.props.onItemClick(row, col)} />)}</div>)
  }

  render() {
    return (
      <div>
        {this.props.data.map(this.lineToHtml)}
      </div>)
  }
}

export default Board;