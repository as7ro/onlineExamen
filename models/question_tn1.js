const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const QuestionSchema = new Schema({
    id: {
        type: Number
    },
    question: {
        type: String
    },
    sienceId: {
        type: Schema.Types.ObjectId
    },
    questionTypeId: {
        type: Schema.Types.ObjectId
    },
    answerId: {
        type: Schema.Types.ObjectId
    },
    compaitibilityAnswerId: {
        type: Schema.Types.ObjectId
    },
    onSelectRandom: {
        type: Boolean
    },
    themeId: {
        type: Schema.Types.ObjectId
    }
});

QuestionSchema.plugin(autoIncrement.plugin,{
    model: 'question',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('question', QuestionSchema);