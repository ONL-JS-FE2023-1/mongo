const { Salad } = require('../models');

module.exports.createSalad = async (req, res, next) => {
    try {
        const { body, ingredients } = req;

        const salad = await Salad.create({ ...body, ingredients });
        return res.status(201).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.getSalad = async (req, res, next) => {
    try {
        const {params: {saladId}} = req;
        const salad = await Salad.findById(saladId).populate('ingredients');

        return res.status(200).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllSalads = async (req, res, next) => {
    try {
        const salads = await Salad.find({}).populate('ingredients');
        return res.status(200).send(salads);
    } catch (error) {
        next(error);
    }
};

module.exports.updateSalad = async (req, res, next) => {
    try {
        const {body, ingredients, params: {saladId}} = req;

        const updated = await Salad.findByIdAndUpdate(saladId, {...body, ingredients }, {returnDocument: 'after'});
        return res.status(200).send(updated);
    } catch (error) {
        next(error);
    }
};

module.exports.deleteSalad = async (req, res, next) => {
    try {
        const {params: {saladId}} = req;
        const deleted = await Salad.findByIdAndDelete(saladId);
        if(!deleted) {
            return res.status(400).send('There is no such salad');
        }

        return res.status(200).send(deleted);
    } catch (error) {
        next(error);
    }
};