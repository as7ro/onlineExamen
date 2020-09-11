const express = require('express');
const router = express.Router();
const Question_tn1 = require('../models/question_tn1');




// get 
router.get('/', (req, res, next) => {

  const promise = Question_tn1.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});

//join

router.get('/questionJoin',(req,res)=>{
  QuestionBook.aggregate([
    {
      $lookup: {
        from: 'siences',
        localField: 'sienceId',
        foreignField: 'id',
        as: 'siences',
      }
    },
    {
      $lookup: {
        from: 'questiontypes',
        localField: 'questionTypeId',
        foreignField: 'id',
        as: 'questionType',
      }
    },
    {
      $lookup: {
        from: 'compatibilities',
        localField: 'compaitibilityAnswerId',
        foreignField: 'id',
        as: 'compatibilities',
      }
    },
    {
      $lookup: {
        from: 'themes',
        localField: 'themeId',
        foreignField: 'id',
        as: 'themes',
      }
    },
    
  ],
  (err, result) => {
    res.json(result)
  })
})



// get question_id
router.get('/:question_id', (req, res) => {

  const promise = Question_tn1.find({'id':req.params.question_id});

  promise.then((question) => {
    res.json(question)
  }).catch((err) => {
    res.json(err)
  });

});


module.exports = router;