require('dotenv').config();

const db = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
};

const ws = {
  host: process.env.SOCKET_HOST,
  port: process.env.SOCKET_PORT,
};

const rabbitmq = {
  url: {
    protocol: 'amqp',
    hostname: process.env.RABBITMQ_HOST || 'localhost',
    port: process.env.RABBITMQ_PORT || 5672,
    vhost: process.env.RABBITMQ_VHOST || '/',
    username: process.env.RABBITMQ_USER || 'guest',
    password: process.env.RABBITMQ_PASS || 'guest',
    locale: 'en_US',
    frameMax: 0,
    heartbeat: process.env.RABBITMQ_HEARTBEAT || 60,
  },
};

const config = {
  app: {
    port: process.env.PORT,
  },
  mongodb: {
    uri: `mongodb://${db.host}:${db.port}/${db.name}`,
    options: {
      user: db.user,
      pass: db.pass,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  },
  socket: {
    uri: `http://${ws.host}:${ws.port}`,
  },
  rabbitmq,
};

module.exports = config;
