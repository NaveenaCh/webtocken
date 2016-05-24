var express = require('express');
var router = express.Router();

var mongoose    = require('mongoose');
var User   = require('../model/user');


router.post('/create', function(req, res, next) {
var nick = new User(req.body);

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});


/* GET users listing. */
router.get('/show', function(req, res, next) {

  User.find({},function(err, users) {
    if (err) throw err;

    res.json({users});
  });
});


module.exports = router;
