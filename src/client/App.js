import React from 'react';
import Board from './component/Board';
import Immutable from 'immutable';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { board: Immutable.fromJS([[0, 0, 0], [0, 0, 0], [0, 0, 0]]) }
  }

  render() {
    const onItemClick = (row, col) => () => {
      const { board } = this.state;
      return this.setState({
        ... this.state,
        board: board.set(row, board.get(row).set(col, 1))
      })
    };
    return (
      <div>
        <Board
          data={this.state.board}
          onItemClick={onItemClick} />
      </div>
    )
  }
}