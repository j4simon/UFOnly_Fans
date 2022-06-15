const express = require('express');
const router = require('express').Router();
const sightingCtrl = require('../controllers/sightingController');
const passport = require('passport');

router.get('/', function (req, res) {
    res.redirect('/sightings')
});

router.get('/UFOnly_Fans', sightingCtrl.showSightings);

router.get('/sightings', sightingCtrl.showSightings);

router.get('/sightings/new', sightingCtrl.newSighting);

router.post('/sightings', sightingCtrl.createSighting);

router.get('/sightings/:id', sightingCtrl.showDetail);

router.patch('/sightings/:id', sightingCtrl.updateSighting);

router.delete('/sightings/:id', sightingCtrl.deleteSighting);


module.exports = router;