const {Router} = require('express');
const SaladController = require('../controllers/salad.controller');
const { findIngredient } = require('../middlewares/getIngredients');

const saladRouter = Router();

saladRouter.get('/', SaladController.getAllSalads);
saladRouter.post('/', findIngredient, SaladController.createSalad);
saladRouter.get('/:saladId', SaladController.getSalad);
saladRouter.patch('/:saladId', SaladController.updateSalad);
saladRouter.delete('/:saladId', SaladController.deleteSalad);

module.exports = saladRouter;