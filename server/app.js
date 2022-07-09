const express = require('express');
const helmet = require('helmet');
const routerIndex = require('./routers/index');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.use('/v1', routerIndex);

module.exports = app;