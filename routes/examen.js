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
  const getList = (id) => {
    const promise2 = QuestionList.find({ "id": id });
    promise2.then((data) => {
      getQuestion(data)
    })
  }
  const getQuestion = (item) => {
    let ids = item[0].questionIds.split(",")
    var Idata = ids.map((elem) => {
      return elem
    })
    Questions.find({ id: { $in: Idata } }).then((data2) => {
      res.json(data2)
    })
  }
  const getExample = async () => {
    var examen = await promise.then((data) => {
      getList(data[0].questionListId)
    });
  }
  getExample();
});
//



module.exports = router;