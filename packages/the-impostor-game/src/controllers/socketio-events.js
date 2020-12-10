const { logger } = require('helpers');

const socketio = require('../services/socketio');

module.exports = socket => {
  socket.on('event', () => {
    logger.debug('receive data-provider event');
  }
)};
