import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('My name is Hirdya Sharma, student ID is 21749180');

});

export default router;
