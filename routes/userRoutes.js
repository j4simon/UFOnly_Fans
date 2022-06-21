// ToDo - Remove Me, Not Being Used

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController')
const passport = require('passport');

router.get('/', function (req, res) {
    res.redirect('/sightings/user')
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

router.get('/', userCtrl.index);

router.post('/', userCtrl.create);

router.get('/user/:user_id/sightings/:id', userCtrl.show);

router.put('/user/:user_id/sightings/:id', userCtrl.update);

router.delete('/user/:user_id/sightings/:id', userCtrl.deleteUFO)


module.exports = router