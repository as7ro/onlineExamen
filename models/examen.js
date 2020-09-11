const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const ExamenSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    questionListId: {
        type: Number
    },
    questionBookId: {
        type: Number
    },
    examenTypeId: {
        type: Number
    }
});

ExamenSchema.plugin(autoIncrement.plugin,{
    model: 'examen',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('examen', ExamenSchema);