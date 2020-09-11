const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const RoleSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    }
});
RoleSchema.plugin(autoIncrement.plugin,{
    model: 'role',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('role', RoleSchema);