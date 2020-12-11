let io;

function setServer(ioServer) {
  io = ioServer;
}

function getServer() {
  return io;
}

function getAllSockets(){
  const sockets = io.sockets.sockets;
 return Object.keys(sockets).map(k => sockets[k]);
}

function emitAll(event, data) {
  io.emit(event, data);
}

function emitOne(socketId, event, data) {
  io.to(socketId).emit(event, data);
}

module.exports = {
  emitAll, setServer, getServer, getAllSockets, emitOne
}