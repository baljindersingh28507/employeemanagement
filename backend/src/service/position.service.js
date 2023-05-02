const createError = require('http-errors')
const Position = require('../model/position.model')


const addPosition = async (req) => {
    try {
        const postionCheck = await Position.findOne({ positionTitle: req.body.positionTitle })
        if (postionCheck) throw new Error(`Position ${req.body.positionTitle} already exists`)
        const position = await Position.create(req.body);
        await position.save();
        return position;
    }
    catch (error) {
        const response = error
        throw response
    }
}

const getPosition = async () => {
    try {
        const position = await Position.find({})
        return position;
    } catch (error) {
        const response = error
        throw response
    }
}

const getPositionByName = async (req) => {
    try {
        const position = await Position.find({ positionTitle: req.params.name })
        return position;
    } catch (error) {
        const response = error
        throw response
    }
}
const getPositionById = async (req) => {
    try {
        const position = await Position.find({ _id: req.params.id })
        return position;
    } catch (error) {
        const response = error
        throw response
    }
}

const updatePosition = async (req) => {
    try {
        const id = req.params.id;
        const position = await Position.findOne({ _id: id });
        if (!position) {
            const error = createError(404, 'Position Not Found');
            throw error;
        }
        const updatedPosition = await Position.updateOne({ _id: id }, req.body);
        return updatedPosition;
    } catch (error) {
        const response = error
        throw response
    }
}

const deletePosition = async (req) => {
    try {
        const id = req.params.id;
        const position = await Position.findOne({ _id: id });
        if (!position) {
            const error = createError(404, 'Position Not Found');
            throw error;
        }
        const deletedPosition = await Position.findByIdAndDelete({ _id: id });
        return deletedPosition;
    } catch (error) {
        const response = error
        throw response
    }
}

module.exports = { addPosition, deletePosition, updatePosition, getPosition, getPositionByName, getPositionById }
