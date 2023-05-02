const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, allowNull: true },
    lastName: { type: String, allowNull: true },
    positionId: {  type: mongoose.SchemaTypes.ObjectId,
        ref: 'Position' },
    // role: { type: Number, allowNull: true, defaultValue: 0, comment: '1=Director , 2=SeniorManager, 3=JuniorManager, 4=SeniorDeveloper , 5=JuniorDeveloper' },
    employeeNumber: { type: String, allowNull: true },
   
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User;