var express = require('express');
var router = express.Router();
const Examen  = require('../models/examen')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/result/:examen_id', function(req, res, next) {
 const promise = Examen.findById(req.body.examen_id);

  //examen_id gelecek
  //examentype sini yoxlayiram 
  // switch caseynen yoxluyuram 
  // eger  examenin typesi meshqdise 
  //questionlistid sini goturub hemin listdeki suallari gotururem
  //goturennen soram 

});

module.exports = router;
