const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, allowNull:false },
    lastName: { type: String, allowNull: false },
    positionId: {  type: mongoose.SchemaTypes.ObjectId,
        ref: 'Position' },
    employeeNumber: { type: String, allowNull: false },
})

const User = mongoose.model('User', userSchema)
module.exports = User;