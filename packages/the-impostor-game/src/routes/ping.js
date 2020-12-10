const { logger } = require('helpers');
const { getDoc } = require('../openapi/api-doc');

module.exports = () => {
  async function get(req, res, next) {
    res.status(200).send('pong');
  }
  async function post(req, res, next) {
    res.status(200).send('pong');
  }
  async function put(req, res, next) {
    res.status(200).send('pong');
  }
  async function del(req, res, next) {
    res.status(200).send('pong');
  }

  const route = {
    get, post, put, del,
  };

  const doc = getDoc(__filename);
  Object.keys(route).forEach(method => {
    route[method].apiDoc = doc[method];
  });

  return route;
};
