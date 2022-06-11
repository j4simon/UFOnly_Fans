const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController')
const passport = require('passport');

router.get('/', function (req, res) {
    res.redirect('/sightings')
});

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/sightings',
      failureRedirect : '/sightings'
    }
  ));


router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

router.get('/UFOnly_Fans', userCtrl.index);

router.post('/UFOnly_Fans', userCtrl.create);

router.get('/UFOnly_Fans/:id', userCtrl.show);

router.put('/UFOnly_Fans/:id', userCtrl.update);

router.delete('/UFOnly_Fans/:id', userCtrl.deleteUFO)


module.exports = router