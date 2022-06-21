const express = require('express');
const router = require('express').Router();
const sightingCtrl = require('../controllers/sightingController');
const passport = require('passport');

router.get('/', function (req, res) {
    res.render('index')
});

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/sightings',
      failureRedirect : '/fail'
    }
  ));

  router.get('/logout', function(req, res){
    req.logout(function(err){
        res.redirect('/');
    });
  });

// router.get('/UFOnly_Fans', sightingCtrl.showSightings);

router.get('/sightings', sightingCtrl.showSightings);

router.get('/sightings/new', sightingCtrl.newSighting);

router.post('/sightings', sightingCtrl.createSighting);

router.get('/sightings/:id', sightingCtrl.showDetail);

router.patch('/update/:id', sightingCtrl.updateSighting);

router.delete('/sightings/:id', sightingCtrl.deleteSighting);


module.exports = router;