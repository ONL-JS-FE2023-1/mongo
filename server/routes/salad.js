const {Router} = require('express');
const path = require('path');
const SaladController = require('../controllers/salad.controller');
const { findIngredient } = require('../middlewares/getIngredients');
const { STATIC_PATH } = require('../configs/path.config');
const multer  = require('multer');

// const upload = multer({ dest: path.resolve(__dirname, '../public/images') });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, STATIC_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`)
    }
})

const upload = multer({ storage })

const saladRouter = Router();

saladRouter.get('/', SaladController.getAllSalads);
saladRouter.post('/', findIngredient, upload.array('images'), SaladController.createSalad);
saladRouter.get('/:saladId', SaladController.getSalad);
saladRouter.patch('/:saladId', SaladController.updateSalad);
saladRouter.delete('/:saladId', SaladController.deleteSalad);

module.exports = saladRouter;