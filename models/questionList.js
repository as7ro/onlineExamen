const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const QuestionListSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    sienceId: {
        type: Schema.Types.ObjectId
    },
    mixedType: {
        type: String
    },
    examenTypeId: {
        type: Schema.Types.ObjectId
    },
    questionId: {
        type: Schema.Types.ObjectId
    },
    themeId: {
        type: Schema.Types.ObjectId
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
QuestionListSchema.plugin(autoIncrement.plugin,{
    model: 'questionList',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('questionList', QuestionListSchema);