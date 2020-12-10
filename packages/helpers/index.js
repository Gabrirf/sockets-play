const logger = require('./src/logger/winston');
const { cutPathFromFolder } = require('./src/utils/stack-info');
const errorCodes = require('./src/errors/error-codes');

module.exports = {
  logger,
  cutPathFromFolder,
  errorCodes,
};
