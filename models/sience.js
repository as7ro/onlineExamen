const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const SienceSchema = new Schema({
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

});

SienceSchema.plugin(autoIncrement.plugin,{
    model: 'sience',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})


module.exports = mongoose.model('sience', SienceSchema);