var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Places = mongoose.model('Places');

var passport = require('passport');

 
 
// register accion 
/*
router.post('/addPlace', function(req, res, next){
  if(!req.body.username || !req.body.password){
      console.log("Porque putas",req.body.username, req.body.password);
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  var user = new User();

  user.username = req.body.username;

  user.setPassword(req.body.password)

  user.save(function (err){
    if(err){ return next(err); }

    return res.json({token: user.generateJWT()})
  });
});

*/
router.post('/addPlace', function(req,res,next){
  if(!req.body.placeName || !req.body.placeCoords || !req.body.tags)
  {
    console.log("Algo anda mal",req.body.placeName);
    return res.status(400).json({message:'please fill out all fields for places'});
  }

  var newPlace = new Places();
  newPlace.placeName = req.body.placeName;
  newPlace.placeCoords.coordinates = req.body.placeCoords;
  newPlace.tags = req.body.tags;
  newPlace.User = req.body.User;

  newPlace.save(function(err){
    if(err)
    {
      return next(err);
    }
    return res.json({message:'this place was saved'});
  });
});



module.exports = router;
