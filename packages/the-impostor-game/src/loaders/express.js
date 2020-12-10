const bodyParser = require('body-parser');
const { HttpStatusError } = require('common-errors');
const swaggerUi = require('swagger-ui-express');

const morgan = require('../config/morgan');
const errorMiddleware = require('../middlewares/error-handler');
const initApiDoc = require('../config/openapi');

module.exports = expressApp => {
  const { apiDoc } = initApiDoc(expressApp);
  expressApp.use(bodyParser.json({ limit: '50mb' }));
  expressApp.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  expressApp.use(morgan);
  expressApp.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDoc));
  expressApp.use((req, res) => {
    errorMiddleware(new HttpStatusError(404, 'Resource not found'), req, res);
  });
};
