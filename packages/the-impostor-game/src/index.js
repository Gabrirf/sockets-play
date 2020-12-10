const { logger } = require('helpers');

const app = require('./app');
const loaders = require('./loaders');
const config = require('./config');

const { port } = config.app;

const server = app.listen(port, err => {
  if (err) {
    logger.error(err);
    return;
  }
  logger.info(`ACCA-STATS app listening on port ${port}!`);
});

loaders.initSocketServer(server);
