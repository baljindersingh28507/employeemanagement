const createError = require('http-errors')
const User = require('../model/user.model')


const createUser = async (req, res) => {
    try {
   
        const newUser = await User.create(req.body);
        await newUser.save();
        return newUser;
    }
    catch (error) {
        const response = error
        throw response
    }
}

const getUserList = async (req, res) => {
    try {
        const usersList = await User.find().populate('positionId')
        return usersList;
    } catch (error) {

    }
}


const getListByRole = async (req, res) => {
    try {
        const role = req.params.role;
        const usersList = await User.find({ positionId: role }).populate('positionId')
        return usersList;
    } catch (error) {
        const response = error
        throw response
    }
}


const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id });
        if (!user) {
            const error = createError(404, 'User Not Found');
            throw error;
        }
        const updatedUser = await User.updateOne({ _id: id }, req.body);
        return updatedUser;
    } catch (error) {
        const response = error
        throw response
    }
}





const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id });
        if (!user) {
            const error = createError(404, 'User Not Found');
            throw error;
        }
        const deletedUser = await User.updateOne({_id:id}, {firstName:null, lastName:null, employeeNumber:null})
        return deletedUser;
    } catch (error) {
        const response = error
        throw response
    }
}


module.exports = { createUser, getUserList, updateUser, deleteUser, getListByRole  }
