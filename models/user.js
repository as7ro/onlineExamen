const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const UserSchema = new Schema({
    id: {
        type: Number
    },
    userName: {
        type: String
    },
    name: {
        type: String
    },
    passwordId: {
        type: Schema.Types.ObjectId
    },
    roleId: {
        type: Schema.Types.ObjectId
    }
    
});

UserSchema.plugin(autoIncrement.plugin,{
    model: 'user',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('user', UserSchema);