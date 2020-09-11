const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const CompatibilityQuestionAnswerSchema = new Schema({
    id: {
        type: Number,
    },
    variance1: {
        type: String
    },
    variance2: {
        type: String
    },
    variance3: {
        type: String
    },
    variance4: {
        type: String
    }
});

CompatibilityQuestionAnswerSchema.plugin(autoIncrement.plugin, {
    model: 'compatibility',
    field: 'id',
    startAt: 100,
    incrementBy: 1
});

module.exports = mongoose.model('compatibility', CompatibilityQuestionAnswerSchema);