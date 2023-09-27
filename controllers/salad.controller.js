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

module.exports.getSalad = async (req, res, next) => {
    try {
        const {params: {saladId}} = req;
        const salad = await Salad.findById(saladId);

        if(!salad) {
            return res.status(400).send('There in no salad');
        }

        return res.status(200).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllSalads = async (req, res, next) => {
    try {
        const allSalads = await Salad.find({});
        return res.status(200).send(allSalads);
    } catch (error) {
        next(error);
    }
};

module.exports.updateSalad = async (req, res, next) => {
    try {
        const {body, params: {saladId}} = req;
        const updated = await Salad.findByIdAndUpdate(saladId, body, {returnDocument: 'after'});
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