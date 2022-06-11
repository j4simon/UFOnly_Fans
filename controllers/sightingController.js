const Sighting = require('../models/sighting')

function createSighting(req, res){
    let newSighting = new Sighting(req.body)
    newSighting.save(() => console.log("Sighting saved!"))
    res.redirect('/sightings')
}

function newSighting(req, res){
    res.render('newSighting')
}

async function showSightings(req, res){
    let allSightings = await Sighting.find({})
    res.render('index', {allSightings})
}

function showDetail(req, res){
    console.log("Show Detail function ran")
    Sighting.findById(req.params.SightingId).then((sighting) =>{
        console.log("sighting")
        res.render('sightingDetail', {sighting})
    })
}

async function updateSighting(req, res) {
    await Sighting.findByIdAndUpdate(req.params.SightingId, req.body)
    res.redirect(`/sightings${req.params.SightingId}`)
}

function deleteSighting(req, res) {
    Sighting.findByIdAndDelete(req.params.SightingId)
    res.redirect('/sightings')
}

module.exports = {
    createSighting,
    newSighting,
    showSightings,
    showDetail,
    updateSighting,
    deleteSighting

}