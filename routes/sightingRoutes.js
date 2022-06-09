var router = require('express').Router();
var sightingCtrl = require('../controllers/sightingController');

// GET /students
router.get('/UFOnly_Fans', sightingCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/facts', sightingCtrl.addFact);

// DELETE /facts/:id
router.delete('/facts/:id', sightingCtrl.delFact);

module.exports = router;