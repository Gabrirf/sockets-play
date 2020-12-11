const express = require('express');
const cors = require('cors');
const loaders = require('./loaders');

const app = express();
app.use(cors());

loaders.initApp(app);

module.exports = app;
