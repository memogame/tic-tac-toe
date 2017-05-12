import express from 'express';
import { initialBoard, determine } from '../game'

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
console.log(__dirname);
app.use(express.static(__dirname + '/../../public'));
let state = { board: initialBoard, turn:1 }

io.on('connection', (socket) => {
  socket.emit('change', state);

  socket.on('reset', () => {
    state = { board: initialBoard, turn:1 };
    io.emit('change', state, {for: 'everyone'});
  });
  socket.on('click', ({row, col}) => {
    const { board } = state;
    state = {
      board: board.set(row, board.get(row).set(col, state.turn)),
      turn: (state.turn) % 2 + 1
    }
    io.emit('change', state, {for: 'everyone'});
  });
});
server.listen(3000);