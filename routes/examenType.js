const express = require('express');
const router = express.Router();
const ExamenType = require('../models/examenType');





// get all examenType 
router.get('/', (req, res, next) => {

  const promise = ExamenType.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});

// get examenTypeId
router.get('/:examenType_id', (req, res) => {

  const promise = ExamenType.find({'id':req.params.examenType_id});

  promise.then((examen) => {
    res.json(examen)
  }).catch((err) => {
    res.json(err)
  });

});


module.exports = router;
