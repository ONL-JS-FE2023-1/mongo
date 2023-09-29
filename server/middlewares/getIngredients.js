const { Ingredient } = require('../models');

module.exports.findIngredient = async (req, res, next) => {
    try {
        const {body: { ingredients } } = req;
        // 1. Знайти всі інгридієнти та витягнути всю по ним інформацію
        const ingrs = []; // масив з ObjectId наших інгридієнтів
        if(ingredients) {
            for(let i = 0; i < ingredients.length; i++) {
                const ingr = await Ingredient.findOne({
                    name: ingredients[i]
                });
                // 2. Створити масив з ObjectId всіх інгридієнтів
                ingrs.push(ingr['_id']);
            }
        }

        // 3. Чіпляємо масив інгридієнтів до req і передаємо керування контроллеру
        req.ingredients = ingrs;
        next();
    } catch (error) {
        next(error);
    }
}