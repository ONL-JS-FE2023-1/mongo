const mongoose = require('mongoose');
const { Schema } = mongoose;

const DB = process.env.DB_NAME || 'fe-test';

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`)
.catch(err => {
    console.log('connect failed');
    next(err);
});

const saladSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: Number,
    ingredients: {
        type: Array,
        required: true
    },
    sauce: String,
    dietType: String,
    isSpicy: Boolean,
    expired: {
        type: Date,
        required: true,
        validate: {
            validator: (v) => v > new Date()
        }
    }
});

const Salad = mongoose.model('Salad', saladSchema);

// Сутність - Салат (Salad)
/*

- name - string
- weight - double
- ingredients - array
- sauce - string
- dietType - string
- isSpicy - bool
- expired_date - date

*/

// Задача: реалізувати CRUD над сутністю Салату

module.exports = {
    Salad
}