const userService = require('../service/user.service');

const createUser = async (req, res, next) => {
    try{
    const data = await userService.createUser(req)
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

const getUserList = async (req, res, next) => {
    try{
    const data = await userService.getUserList(req)
    res.status(200).json({
        success: true,
        message: 'User List get successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

const getListByRole = async (req, res, next) => {
    try{
    const data = await userService.getListByRole(req)
    res.status(200).json({
        success: true,
        message: 'User List get successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

const updateUser = async (req, res, next) => {
    try{
    const data = await userService.updateUser(req)
    res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

const deleteUser = async (req, res, next) => {
    try{
    const data = await userService.deleteUser(req)
    res.status(200).json({
        success: true,
        message: 'User deleted successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

const addPosition = async (req, res, next) => {
    try{
    const data = await userService.addPosition(req)
    res.status(200).json({
        success: true,
        message: 'Position added successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

module.exports = {createUser,getUserList,updateUser,deleteUser,getListByRole,addPosition}
