const express = require('express');
const app = express();
const SaladController = require('./controllers/salad.controller');

app.use(express.json());

app.get('/');
app.post('/', SaladController.createSalad);
app.get('/:saladId');
app.patch('/:saladId');
app.delete('/:saladId');

module.exports = app;