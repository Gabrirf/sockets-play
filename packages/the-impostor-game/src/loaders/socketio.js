const socketioService = require('../services/socketio');

module.exports = server => socketioService.initSocketIO(server);
