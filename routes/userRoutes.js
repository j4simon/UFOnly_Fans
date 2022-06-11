const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController')
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

router.get('/', userCtrl.index);

router.post('/', userCtrl.create);

router.get('/:id', userCtrl.show);

router.put('/:id', userCtrl.update);

router.delete('/:id', userCtrl.deleteUFO)


module.exports = router