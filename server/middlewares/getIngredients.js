const { Ingredient, Salad } = require('../models');

module.exports.findIngredient = async (req, res, next) => {
    try {
        const { params: { saladId }, body: { ingredients } } = req;

        const salad = await Salad.findById(saladId);

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
        if(salad) {
            if(salad.ingredients) {
                req.ingredients = salad.ingredients.concat(ingrs)
            }
        } else {
            req.ingredients = ingrs;
        }
        next();
    } catch (error) {
        next(error);
    }
}