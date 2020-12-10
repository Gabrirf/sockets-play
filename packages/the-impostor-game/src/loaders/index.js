const mongodbLoader = require('./mongodb');
const expressLoader = require('./express');
const socketIOServerLoader = require('./socketio');
const rabbitmqLoader = require('./rabbitmq');

function initApp(app, config) {
  expressLoader(app);
  mongodbLoader(config.mongodb);
  rabbitmqLoader(config.rabbitmq);
}

function initSocketServer(server) {
  socketIOServerLoader(server);
}

module.exports = {
  initApp,
  initSocketServer,
};
