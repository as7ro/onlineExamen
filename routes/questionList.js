const express = require('express');
const router = express.Router();
const QuestionList = require('../models/questionList');




// get 
router.get('/', (req, res, next) => {

  const promise = QuestionList.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});

//join

router.get('/questionListJoin',(req,res)=>{
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
        from: 'questions',
        localField: 'questionId',
        foreignField: 'id',
        as: 'questions',
      }
    },
    {
      $lookup: {
        from: 'examentypes',
        localField: 'examenTypeId',
        foreignField: 'id',
        as: 'examenType',
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


// get questionList_id
router.get('/:questionList_id', (req, res) => {

  const promise = QuestionList.find({'id':req.params.questionList_id});

  promise.then((questionList) => {
    res.json(questionList)
  }).catch((err) => {
    res.json(err)
  });

});


module.exports = router;