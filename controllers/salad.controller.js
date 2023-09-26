const { Salad } = require('../models');

module.exports.createSalad = async (req, res, next) => {
    try {
        const { body } = req;
        const salad = await Salad.create(body);
        return res.status(201).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.getSalad = async () => {};

module.exports.getAllSalads = async () => {};

module.exports.updateSalad = async () => {};

module.exports.deleteSalad = async () => {};