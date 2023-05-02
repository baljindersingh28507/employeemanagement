const mongoose = require('mongoose');

const positionSchema = mongoose.Schema({
    positionNumber: { type: String, allowNull: true, defaultValue: 0},
    positionTitle: { type: String, allowNull: true },
})

const Position = mongoose.model('Position', positionSchema)
module.exports = Position;