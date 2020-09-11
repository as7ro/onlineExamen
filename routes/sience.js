const express = require('express');
const router = express.Router();
const Sience = require('../models/sience');





// get all sience 
router.get('/', (req, res, next) => {

  const promise = Sience.find({});

  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});

// get sienceId
router.get('/:sience_id', (req, res) => {

  const promise = Sience.find({'id':req.params.sience_id});
  
  promise.then((sience) => {
    res.json(sience)
  }).catch((err) => {
    res.json(err)
  });

});

module.exports = router;
