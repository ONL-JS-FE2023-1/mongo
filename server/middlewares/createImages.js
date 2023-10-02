const { Salad } = require('../models');

module.exports.createImages = async (req, res, next) => {
    try {
        const {params: {saladId}, files} = req;
        
        // 1 дія: Знайти салат, який потрібно оновити
        const salad = await Salad.findById(saladId);

        // 2 дія: Додаємо картинки до салатику
        if(salad) {
            if(salad.images) {
                if(files) {
                    salad.images = salad.images.concat(files.map((file) => file.filename));
                }
            }
        } else {
            let images = [];
            if(files) {
                images = files.map((file) => file.filename);
            }
            if(salad) {
                salad.images = images;
            }
        }

        if(salad) {
            req.body = { ...req.body, images: salad.images }
        } else {
            req.body = { ...req.body, images: [] }
        }

        next();
    } catch (error) {
        next(error);
    }
}