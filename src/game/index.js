import Immutable from 'immutable';

export const determine = (board) => {
  let isFinished = false;
  let winner = undefined;
  // Check horizontal
  for (let i = 0; board.size(); i++) {
    
  }
  // Check vertical
  // Check diagonal

  // Check draw
  return {isFinished, winner}
}

export const initialBoard = Immutable.fromJS([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);