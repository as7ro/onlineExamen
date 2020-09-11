const express = require('express');
const router = express.Router();
const QuestionType = require('../models/questionType');




// get 
router.get('/', (req, res, next) => {

  const promise = QuestionType.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});

// get questionType_id
router.get('/:questionType_id', (req, res) => {

  const promise = QuestionType.find({'id':req.params.questionType_id});

  promise.then((questionType) => {
    res.json(questionType)
  }).catch((err) => {
    res.json(err)
  });

});


module.exports = router;