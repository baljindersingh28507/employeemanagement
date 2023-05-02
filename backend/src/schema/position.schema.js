const Joi = require('joi');

const addPosition = {
    body: Joi.object().keys({
        positionTitle: Joi.string().required(),
        positionNumber: Joi.string().required(),
    }),
};

const editPosition = {
    params: Joi.object().keys({
        id: Joi.string().required()
    }),
    body: Joi.object().keys({
        positionNumber: Joi.string().empty(''),
    }),
};

module.exports = {
    addPosition,
    editPosition
}