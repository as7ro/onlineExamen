const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const QuestionBookSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    variance: {
        type: String
    },
    questionListId: {
        type: Number
    }

});
QuestionBookSchema.plugin(autoIncrement.plugin,{
    model: 'questionBook',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('questionBook', QuestionBookSchema);