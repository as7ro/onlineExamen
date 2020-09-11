const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const UserExamensSchema = new Schema({
    examenIds: {
        type: String
    },
    resultsId: {
        type: String
    },
    passwordId: {
        type: Schema.Types.ObjectId
    },
    roleId: {
        type: Schema.Types.ObjectId
    }
    
});

UserExamensSchema.plugin(autoIncrement.plugin,{
    model: 'userExamens',
    field: 'id',
    startAt: 100,
    incrementBy: 1
})

module.exports = mongoose.model('userExamens', UserExamensSchema);