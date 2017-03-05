'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use('/', _express2.default.static('../public'));
io.on('connection', function () {
  return console.log("connection");
});
server.listen(3000);