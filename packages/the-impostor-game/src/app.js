const express = require('express');
const cors = require('cors');
const loaders = require('./loaders');
const config = require('./config');

const app = express();
app.use(cors());

loaders.initApp(app, config);

module.exports = app;
