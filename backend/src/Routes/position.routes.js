const express = require('express');
const route = express.Router()
const positionSchema = require('../schema/position.schema')
const positionController = require('../controller/position.controller')
const validate = require('../middleware/validation')


route.post('/',validate(positionSchema.addPosition), positionController.addPosition)

route.get('/',  positionController.getPosition)
route.get('/:name',  positionController.getPositionByName)
route.get('/id/:id',  positionController.getPositionById)

route.delete('/:id',  positionController.deletePosition)

route.put('/:id',validate(positionSchema.editPosition),  positionController.updatePosition)

module.exports = route;