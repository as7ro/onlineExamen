const express = require('express');
const router = express.Router();
const QuestionBook = require('../models/questionBook');




// get questionBook
router.get('/', (req, res, next) => {

  const promise = QuestionBook.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});
//join
router.get('/questionBookJoin',(req,res)=>{
  QuestionBook.aggregate([
    {
      $lookup: {
        from: 'questionlists',
        localField: 'questionListId',
        foreignField: 'id',
        as: 'questionLists',
      }
    }
  ],
  (err, result) => {
    res.json(result)
  })
})

// get questionBook_id
router.get('/:questionBook_id', (req, res) => {

  const promise = QuestionBook.find({'id':req.params.questionBook_id});

  promise.then((questionBook) => {
    res.json(questionBook)
  }).catch((err) => {
    res.json(err)
  });

});


module.exports = router;