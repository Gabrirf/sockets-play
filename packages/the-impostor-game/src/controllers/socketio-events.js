const { logger } = require('helpers');
const Player = require('../classes/player');

const socketio = require('../services/socketio/events');
const { getRandomColor } = require('../util/color');

let players = [];

function join(name, socket) {
  logger.debug(name);
  players.push(new Player(name, getRandomColor(), socket.id));
  socketio.emitAll('players', players);
}

function start() {
  logger.debug("Start");
  if(players.length > 0){
    players[Math.floor(Math.random()*players.length)].role = 'impostor'
  }
  players.forEach(p => socketio.emitOne(p.id, 'role', p.role));
}

function vote(id) {
  logger.debug(`Vote ${id}`);
  const index = players.findIndex(p => p.id === id);
  players[index].die();
  socketio.emitAll('players', players);
}

function clear() {
  players = [];
}

function init(socket) {
  socket.on('join', data => join(data, socket));
  socket.on('start', start);
  socket.on('vote', vote);
  socket.on('clear', clear);
};

module.exports = {
  init,
}