var express = require('express');
var router = express.Router();
const Question_list = require('../models/list_Question')



/* GET home page. */
router.post('/save', (req, res, next) => {
    const question_List = new Question_list(req.body);
    const promise = question_List.save();
    promise.then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })

});



module.exports = router;
