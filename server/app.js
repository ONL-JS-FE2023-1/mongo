const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./routes');
const { errorHandler } = require('./errorHandler');

app.use(cors());

app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

module.exports = app;