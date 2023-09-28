const { Ingredient } = require('../models');

module.exports.addIngredient = async (req, res, next) => {
    try {
        const { body } = req;
        const created = await Ingredient.create(body);
        return res.status(201).send(created);
    } catch (error) {
        next(error);
    }
}

module.exports.getAllIngredient = async (req, res, next) => {
    try {
        const all = await Ingredient.find({});
        return res.status(200).send(all);
    } catch (error) {
        next(error);
    }
}