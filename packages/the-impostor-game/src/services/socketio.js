const socketIo = require('socket.io');
const { logger } = require('helpers');

const socketIOEvents = require('../controllers/socketio-events');

let io;

function init(server) {
  io = socketIo(server);

  io.on('error', err => {
    throw err;
  });

  io.on('connection', socket => {
    socketIOEvents(socket);
    socket.on('disconnect', () => {
      logger.info(`${socket.handshake.address} has been disconnected`);
    });
    logger.info(`A user connected from: : ${socket.handshake.address}`);
  });
}

function emit(event, data) {
  io.emit(event, { data });
}

module.exports = { init, emit };
