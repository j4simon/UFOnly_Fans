const Sighting = require('../models/sighting')

function createSighting(req, res){
    let newSighting = new Sighting(req.body)
    console.log(newSighting)
    newSighting.save(() => console.log("Sighting saved!"))
    res.redirect('/sightings')
}

function newSighting(req, res){
    res.render('newSighting')
}

async function showSightings(req, res){
    let allSightings = await Sighting.find({})
    console.log(allSightings)
    res.render('index', {allSightings})
}

function showDetail(req, res){
    console.log("Show Detail function ran")
    console.log(req.params)
    Sighting.findById(req.params.id).then((sighting) =>{
        console.log(sighting)
        res.render('sightingDetail', {sighting})
    })
}

async function updateSighting(req, res) {
    console.log(req.params)
    console.log(req.body)
    await Sighting.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/sightings/${req.params.id}`)
}

function deleteSighting(req, res) {
    Sighting.findByIdAndDelete(req.params.id)
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