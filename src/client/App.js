import React from 'react';
import Board from './component/Board';
import Immutable from 'immutable';
import { initialBoard, determine } from '../game'
import io from 'socket.io-client';

export default class App extends React.Component {
  constructor() {
    super();
    this.socket = io();
    this.socket.on('change', ({board, turn}) => {
      this.setState({board, turn});
    })
    this.state = { board: initialBoard, turn:1 }
  }

  renderResult({borad}) {

  }

  render() {
    const onItemClick = (row, col) => () => {
      this.socket.emit('click', {row, col});
    };
    return (
      <div>
        <Board
          isFinished = {determine(this.state.board).isFinished}
          data={this.state.board}
          onItemClick={onItemClick} />
        {this.renderResult(this.state.board)}
        <button onClick={() => this.socket.emit('reset')}>Reset</button>
      </div>
    )
  }
}