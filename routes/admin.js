const express = require('express');
const router = express.Router();
const Sience = require('../models/sience');
const ExamenType = require('../models/examenType')
const Examen = require('../models/examen');
const Question_tn1 = require('../models/question_tn1');
const Compatibility = require('../models/compatibilityQuestionAnswerTn_1');
const QuestionBook = require('../models/questionBook');
const QuestionList = require('../models/questionList')
const QuestionType = require('../models/questionType')
const Theme = require('../models/theme')
const VarianceQuestionAnswers = require('../models/varianceQuestionAnswer_QuestionTn_1')

/////////////////////////// Sience /////////////////////////
//add  sience
router.post('/addSience', (req, res, next) => {

  const sience = new Sience(req.body);
  
  const promise = sience.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update sience
router.put('/:sience_id', (req, res) => {
 

  const promise = Sience.findOneAndUpdate({id:req.params.sience_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((sience)=>{
    res.json(sience)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete sience
router.delete('/:sience_id',(req,res)=>{
  
  const promise = Sience.findOneAndDelete({id:req.params.sience_id});

  promise.then((sience)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})





//////////////////////// examenType ///////////////////////////
//add  examenType
router.post('/addExamenType', (req, res, next) => {

  const examenType = new ExamenType(req.body);
  
  const promise = examenType.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update examenType
router.put('/:examenType_id', (req, res) => {
 

  const promise = ExamenType.findOneAndUpdate({id:req.params.examenType_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((examenType)=>{
    res.json(examenType)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete examenType
router.delete('/:examenType_id',(req,res)=>{
  
  const promise = ExamenType.findOneAndDelete({id:req.params.examenType_id});

  promise.then((examenType)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})




///////////////////////  examen /////////////////////////
//add examen
router.post('/addExamen', (req, res, next) => {

  const examen = new Examen(req.body);
  
  const promise = examen.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update examen
router.put('/:examen_id', (req, res) => {
 

  const promise = Examen.findOneAndUpdate({id:req.params.examen_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((examen)=>{
    res.json(examen)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete examen
router.delete('/:examen_id',(req,res)=>{
  
  const promise = Examen.findOneAndDelete({id:req.params.examen_id});

  promise.then((examen)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})



///////////////////////  question  /////////////////////////
//add question
router.post('/addQuestion', (req, res, next) => {

  const question_tn1 = new Question_tn1(req.body);
  
  const promise = question_tn1.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update question
router.put('/:question_id', (req, res) => {
 

  const promise = Question_tn1.findOneAndUpdate({id:req.params.question_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((question)=>{
    res.json(question)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete question
router.delete('/:question_id',(req,res)=>{
  
  const promise = Question_tn1.findOneAndDelete({id:req.params.question_id});

  promise.then((question)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})




///////////////////////  CompatibilityQuestionAnswer_tn1  /////////////////////////
//add CompatibilityQuestionAnswer
router.post('/addCompatibility', (req, res, next) => {

  const compatibility = new Compatibility(req.body);
  
  const promise = compatibility.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update CompatibilityQuestionAnswer
router.put('/:compatibility_id', (req, res) => {
 

  const promise = Compatibility.findOneAndUpdate({id:req.params.compatibility_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((compatibility)=>{
    res.json(compatibility)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete CompatibilityQuestionAnswer
router.delete('/:compatibility_id',(req,res)=>{
  
  const promise = Compatibility.findOneAndDelete({id:req.params.compatibility_id});

  promise.then((compatibility)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})





///////////////////////  QuestionBook  /////////////////////////
//add questionBook
router.post('/addQuestionBook', (req, res, next) => {

  const questionBook = new QuestionBook(req.body);
  
  const promise = questionBook.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update questionBook
router.put('/:questionBook_id', (req, res) => {
 

  const promise = QuestionBook.findOneAndUpdate({id:req.params.questionBook_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((questionBook)=>{
    res.json(questionBook)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete questionBook
router.delete('/:questionBook_id',(req,res)=>{
  
  const promise = QuestionBook.findOneAndDelete({id:req.params.questionBook_id});

  promise.then((questionBook)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})




///////////////////////  QuestionList  /////////////////////////
//add questionList
router.post('/addQuestionList', (req, res, next) => {

  const questionList = new QuestionList(req.body);
  
  const promise = questionList.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update questionList
router.put('/:questionList_id', (req, res) => {
 

  const promise = QuestionList.findOneAndUpdate({id:req.params.questionList_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((questionList)=>{
    res.json(questionList)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete questionList
router.delete('/:questionList_id',(req,res)=>{
  
  const promise = QuestionList.findOneAndDelete({id:req.params.questionList_id});

  promise.then((questionList)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})






///////////////////////  QuestionType  /////////////////////////
//add questionList
router.post('/addQuestionType', (req, res, next) => {

  const questionType = new QuestionType(req.body);
  
  const promise = questionType.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update questionType
router.put('/:questionType_id', (req, res) => {
 

  const promise = QuestionType.findOneAndUpdate({id:req.params.questionType_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((questionType)=>{
    res.json(questionType)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete questionType
router.delete('/:questionType_id',(req,res)=>{
  
  const promise = QuestionType.findOneAndDelete({id:req.params.questionType_id});

  promise.then((questionType)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})






///////////////////////  Theme  /////////////////////////
//add Theme
router.post('/addTheme', (req, res, next) => {

  const theme = new Theme(req.body);
  
  const promise = theme.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update Theme
router.put('/:theme_id', (req, res) => {
 

  const promise = Theme.findOneAndUpdate({id:req.params.theme_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((theme)=>{
    res.json(theme)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete Theme
router.delete('/:theme_id',(req,res)=>{
  
  const promise = Theme.findOneAndDelete({id:req.params.theme_id});

  promise.then((theme)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})



///////////////////////  VarianceQuestionAnswers  /////////////////////////
//add VarianceQuestionAnswers
router.post('/addVarianceQuestion', (req, res, next) => {

  const varianceQuestion = new VarianceQuestionAnswers(req.body);
  
  const promise = varianceQuestion.save();
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err);
  })
});

//update VarianceQuestionAnswers
router.put('/:varianceQuestion_id', (req, res) => {
 

  const promise = VarianceQuestionAnswers.findOneAndUpdate({id:req.params.varianceQuestion_id},
    req.body,
    {
      new:true // update olduxdan sonraki update olunmus versiyani gostermek
    }
  );

  promise.then((varianceQuestion)=>{
    res.json(varianceQuestion)
  }).catch((err)=>{
    res.json(err)
  })
})

//delete VarianceQuestionAnswers
router.delete('/:varianceQuestion_id',(req,res)=>{
  
  const promise = VarianceQuestionAnswers.findOneAndDelete({id:req.params.varianceQuestion_id});

  promise.then((varianceQuestion)=>{
    res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
})






module.exports = router;
