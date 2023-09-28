const mongoose = require('mongoose');
const Salad = require('./Salad');
const Ingredient = require('./Ingredient');

const DB = process.env.DB_NAME || 'fe-test';

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`)
.catch(err => {
    console.log('connect failed');
    next(err);
});



module.exports = {
    Salad, Ingredient
}