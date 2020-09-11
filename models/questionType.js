const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const QuestionTypeSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    }
});
QuestionTypeSchema.plugin(autoIncrement.plugin,{
    model: 'questionType',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('questionType', QuestionTypeSchema);