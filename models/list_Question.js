const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ListQuestionSchema = new Schema({
   
    questionListId: {
        type: Number
    },
    questionId: {
       type:Number
    },

});


module.exports = mongoose.model('listQuestion', ListQuestionSchema);