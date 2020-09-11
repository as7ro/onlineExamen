const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const PasswordSchema = new Schema({
    id: {
        type: Number
    },
    hashPassword: {
        type: String
    }
});

PasswordSchema.plugin(autoIncrement.plugin,{
    model: 'password',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('password', PasswordSchema);