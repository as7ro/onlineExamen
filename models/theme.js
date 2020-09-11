const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const ThemeSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    sienceId: {
        type: Schema.Types.ObjectId
    },
    

});
ThemeSchema.plugin(autoIncrement.plugin,{
    model: 'theme',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('theme', ThemeSchema);