const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const ExamenTypeSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    conditions: {
        type: String
    },
    startingTime: {
        type: Date,
        default: Date.now
    }
});

ExamenTypeSchema.plugin(autoIncrement.plugin,{
    model: 'examenType',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('examenType', ExamenTypeSchema);