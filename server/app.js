const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./routes');
const { errorHandler } = require('./errorHandler');
const { STATIC_PATH } = require('./configs/path.config');

app.use(cors());
app.use(express.static(STATIC_PATH));

app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

module.exports = app;