const Joi = require('joi');

const createUser = {
    body: Joi.object().keys({
        firstName: Joi.string().empty(''),
        lastName: Joi.string().empty(''),
        employeeNumber: Joi.string().empty(''),
        positionId: Joi.string().empty(''),
    }),
};

const editUser = {
    params: Joi.object().keys({
        id: Joi.string().required()
    }),
    body: Joi.object().keys({
        firstName: Joi.string().empty(''),
        lastName: Joi.string().empty(''),
        employeeNumber: Joi.string().empty(''),
        positionId: Joi.string().empty(''),
    }),
};

module.exports = {
    createUser,
    editUser
}