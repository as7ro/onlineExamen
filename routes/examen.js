const express = require('express');
const router = express.Router();
const Examen = require('../models/examen');




// get all examen
router.get('/', (req, res, next) => {

  const promise = Examen.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });

});


router.get('/examenjoin', (req, res) => {
  Examen.aggregate([
    {
      $lookup: {
        from: 'questionlists',
        localField: 'questionListId',
        foreignField: 'id',
        as: 'examenQuestionList',
      }
    }
      ,
      {
        $lookup:{
          from:'questionbooks',
          localField:'questionBookId',
          foreignField:'id',
          as:'examenQuestionBook',
        }
      },
      {
        $lookup:{
          from:'examentypes',
          localField:'examenTypeId',
          foreignField:'id',
          as:'examenTypes',
        }
      }
  ], (err, result) => {
    res.json(result)
  })
})

// get examen
router.get('/:examen_id', (req, res) => {

  const promise = Examen.find({ 'id': req.params.examen_id });

  promise.then((examen) => {
    res.json(examen)
  }).catch((err) => {
    res.json(err)
  });

});
//



module.exports = router;