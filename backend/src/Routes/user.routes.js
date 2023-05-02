const express = require('express');
const route = express.Router()
const userSchema = require('../schema/user.schema')
const userController = require('../controller/user.controller')
const validate = require('../middleware/validation')


route.post('/addUser',validate(userSchema.createUser), userController.createUser)

route.get('/getUsers',  userController.getUserList)

route.get('/getUsersByRole/:role',  userController.getListByRole)

route.post('/addPosition/:id',  userController.addPosition)

route.delete('/deleteUser/:id',  userController.deleteUser)

route.put('/updateUser/:id',validate(userSchema.editUser),  userController.updateUser)

module.exports = route;