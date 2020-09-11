const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const VarianceQuestionAnswerSchema = new Schema({
    id: {
        type: Number
    },
    a: {
        type: String
    },
    b: {
        type: String
    },
    c: {
        type: String
    },
    d: {
        type: String
    },
    e: {
        type: String
    },
    trueVariance: {
        type: String
    }
    
});

VarianceQuestionAnswerSchema.plugin(autoIncrement.plugin,{
    model: 'varianceQuestion',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('varianceQuestion', VarianceQuestionAnswerSchema);