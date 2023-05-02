const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, allowNull:false },
    lastName: { type: String, allowNull: false },
    positionId: {  type: mongoose.SchemaTypes.ObjectId,
        ref: 'Position' },
    role: { type: Number, allowNull: false, defaultValue: 0, comment: '1=Director , 2=SeniorManager, 3=JuniorManager, 4=SeniorDeveloper , 5=JuniorDeveloper' },
    employeeNumber: { type: String, allowNull: false },
})

const User = mongoose.model('User', userSchema)
module.exports = User;