const { initialize } = require('express-openapi');
const path = require('path');
const { HttpStatusError } = require('common-errors');

const { apiDoc } = require('../openapi/api-doc');
const services = require('../services');
const errorMiddleware = require('../middlewares/error-handler');

module.exports = app => initialize({
  apiDoc,
  errorMiddleware,
  app,
  dependencies: {
    ...services,
  },
  paths: path.resolve(__dirname, '../routes'),
  promiseMode: true,
  securityHandlers: {
    disabled: () => { throw new HttpStatusError(405, 'This method has been disabled'); },
  },
});
