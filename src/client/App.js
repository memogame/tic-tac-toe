import React from 'react';
import Board from './component/Board';
import Immutable from 'immutable';
import { initialBoard, determine } from '../game'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { board: initialBoard, turn:1 }
  }

  renderResult({borad}) {

  }

  render() {
    const onItemClick = (row, col) => () => {
      const { board } = this.state;
      return this.setState({
        ... this.state,
        board: board.set(row, board.get(row).set(col, this.state.turn)),
        turn: (this.state.turn) % 2 + 1
      })
    };
    return (
      <div>
        <Board
          isFinished = {determine(this.state.board).isFinished}
          data={this.state.board}
          onItemClick={onItemClick} />
        {this.renderResult(this.state.board)}
        <button onClick={() => this.setState({...this.state, board:initialBoard, turn: 1 })}>Reset</button>
      </div>
    )
  }
}