import express from 'express';
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use('/', express.static('../public'));
io.on('connection', () => console.log("connection"));
server.listen(3000);