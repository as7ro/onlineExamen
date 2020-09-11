const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


//routes space
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const examenRouter = require('./routes/examen');
const sienceRouter = require('./routes/sience');
const adminRouter = require('./routes/admin');
const examenTypeRouter = require('./routes/examenType');
const themeRouter = require('./routes/theme');
const questionTypeRouter = require('./routes/questionType');
const questionListRouter = require('./routes/questionList');
const questionBookRouter = require('./routes/questionBook');
const question_tn1Router = require('./routes/question_tn1');
const compatibilityRouter = require('./routes/compatibility');
const varianceQuestionAnswerRouter = require('./routes/varianceQuestionAnswers');



//app
const app = express();

// db connection
const db  =  require('./helper/db.js')();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/examens',examenRouter);
app.use('/api/siences',sienceRouter);
app.use('/api/admin',adminRouter);
app.use('/api/examenType',examenTypeRouter);
app.use('/api/questionList',questionListRouter);
app.use('/api/questionType',questionTypeRouter);
app.use('/api/question_tn1',question_tn1Router);
app.use('/api/questionBook',questionBookRouter);
app.use('/api/theme',themeRouter);
app.use('/api/varianceQuestionAnswers',varianceQuestionAnswerRouter);
app.use('/api/compatibility',compatibilityRouter);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
