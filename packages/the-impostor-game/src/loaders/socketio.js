const socketIO = require('../services/socketio');

module.exports = server => {
  socketIO.init(server);
};
