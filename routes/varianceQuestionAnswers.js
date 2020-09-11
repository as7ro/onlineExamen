const express = require('express');
const router = express.Router();
const VarianceQuestionAnswer = require('../models/theme');





// get all varianceQuestionAnswer 
router.get('/', (req, res, next) => {

  const promise = VarianceQuestionAnswer.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});

// get sienceId
router.get('/:varianceQuestion_id', (req, res) => {

  const promise = VarianceQuestionAnswer.find({'id':req.params.varianceQuestion_id});
  
  promise.then((varianceQuestionAnswer) => {
    res.json(varianceQuestionAnswer)
  }).catch((err) => {
    res.json(err)
  });

});

module.exports = router;
