import Immutable from 'immutable';

export const determine = (board) => {
  let isFinished = false;
  let winner = undefined;
  
  return {isFinished, winner}
}

export const initialBoard = Immutable.fromJS([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);