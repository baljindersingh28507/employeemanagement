const positionService = require('../service/position.service');

const addPosition = async (req, res, next) => {
    try{
    const data = await positionService.addPosition(req)
    res.status(201).json({
        success: true,
        message: 'Position added successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

const getPosition = async (req, res, next) => {
    try{
    const data = await positionService.getPosition()
    res.status(200).json({
        success: true,
        message: 'Position get successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

const getPositionByName = async (req, res, next) => {
    try{
    const data = await positionService.getPositionByName(req)
    res.status(200).json({
        success: true,
        message: 'Position get successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}
const getPositionById = async (req, res, next) => {
    try{
    const data = await positionService.getPositionById(req)
    res.status(200).json({
        success: true,
        message: 'Position get successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}
const updatePosition = async (req, res, next) => {
    try{
    const data = await positionService.updatePosition(req)
    res.status(200).json({
        success: true,
        message: 'Position updated successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

const deletePosition = async (req, res, next) => {
    try{
    const data = await positionService.deletePosition(req)
    res.status(200).json({
        success: true,
        message: 'Position deleted successfully',
        data
    })
}
 catch (error){
    next(error);
 }
}

module.exports = {addPosition,getPosition,updatePosition,deletePosition, getPositionByName, getPositionById}
