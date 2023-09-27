const { Error: { ValidationError } } = require('mongoose');

module.exports.errorHandler = async (err, req, res, next) => {
    if(err instanceof ValidationError) {
        return res.status(400).send(err.message);
    }

    return res.status(500).send('Unkown error');
}