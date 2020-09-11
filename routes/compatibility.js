const express = require('express');
const router = express.Router();
const Compatibility = require('../models/compatibilityQuestionAnswerTn_1');





// get all examen
router.get('/', (req, res, next) => {

  const promise = Compatibility.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});

// get examen
router.get('/:compatibility_id', (req, res) => {

  const promise = Compatibility.find({'id':req.params.compatibility_id});

  promise.then((compatibility) => {
    res.json(compatibility)
  }).catch((err) => {
    res.json(err)
  });

});


module.exports = router;