const { logger } = require('helpers');
const { connect } = require('models');

async function initDatabase(mongoConfig) {
  try {
    await connect(mongoConfig.uri, mongoConfig.options);
    logger.info(`🐵 Mongodb ready at ${mongoConfig.uri}`);
  } catch (error) {
    logger.error(`Couldn't connect to MongoDB at ${mongoConfig.uri}`);
    throw error;
  }
}

module.exports = initDatabase;
