const expressLoader = require('./express');
const socketIOServerLoader = require('./socketio');

function initApp(app) {
  expressLoader(app);
}

function initSocketServer(server) {
  socketIOServerLoader(server);
}

module.exports = {
  initApp,
  initSocketServer,
};
