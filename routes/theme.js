const express = require('express');
const router = express.Router();
const Theme = require('../models/theme');





// get all theme 
router.get('/', (req, res, next) => {

  const promise = Theme.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});


//join
router.get('/themejoin',(req,res)=>{
  QuestionBook.aggregate([
    {
      $lookup: {
        from: 'siences',
        localField: 'sienceId',
        foreignField: 'id',
        as: 'siences',
      }
    }
  ],
  (err, result) => {
    res.json(result)
  })
})
// get sienceId
router.get('/:theme_id', (req, res) => {

  const promise = Theme.find({'id':req.params.theme_id});
  
  promise.then((theme) => {
    res.json(theme)
  }).catch((err) => {
    res.json(err)
  });

});

module.exports = router;
