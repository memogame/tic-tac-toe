import React from 'react';
import Board from './component/Board';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {board:[[0, 0, 0],[0, 0, 0], [0, 0, 0]]}
  }

  render() {
    return (
      <div>
        <Board data={this.state.board}/>
      </div>
    )
  }
}