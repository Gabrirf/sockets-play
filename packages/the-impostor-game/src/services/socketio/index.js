const socketioConnection = require('./connection');
const socketioEvents = require('./events');

function initSocketIO(server) {
  const io = socketioConnection.init(server);
  socketioEvents.setServer(io);
}

module.exports = {
 initSocketIO,
 ...socketioConnection,
 ...socketioEvents,
}
