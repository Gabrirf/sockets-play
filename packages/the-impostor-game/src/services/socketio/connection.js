const socketIo = require('socket.io');
const { logger } = require('helpers');

const socketioEvents = require('../../controllers/socketio-events');

function init(server) {
  const io = socketIo(server);

  io.on('error', err => {
    throw err;
  });

  io.on('connection', socket => {
    socketioEvents.init(socket);
    socket.on('disconnect', () => {
      logger.info(`${socket.handshake.address} has been disconnected`);
    });
    logger.info(`A user connected from: : ${socket.handshake.address}`);
  });
  
  return io;
}

module.exports = { init };
