const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const ResultSchema = new Schema({
    id: {
        type: Number
    },
    question: {
        type: String
    },
    userAnswer:{
        type: String
    },
    answerId:{
        type: String
    }
});
ResultSchema.plugin(autoIncrement.plugin,{
    model: 'result',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('result', ResultSchema);