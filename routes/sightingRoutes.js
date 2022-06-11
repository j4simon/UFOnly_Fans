const express = require('express');
const router = require('express').Router();
const sightingCtrl = require('../controllers/sightingController');
const passport = require('passport');

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/UFOnly_Fans',
      failureRedirect : '/'
    }
  ));


router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });



router.get('/sightings', sightingCtrl.showSightings);

router.post('/sightings', sightingCtrl.createSighting);

router.get('/:id', sightingCtrl.showDetail);

router.patch('/:id', sightingCtrl.updateSighting);

router.delete('/:id', sightingCtrl.deleteSighting)

module.exports = router;