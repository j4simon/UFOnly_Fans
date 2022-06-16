const Sighting = require('../models/sighting')

function createSighting(req, res){
    let newSighting = new Sighting(req.body)
    console.log(newSighting)
    newSighting.save(() => console.log("Sighting saved!"))
    res.redirect('/sightings')
}

function index(req, res, next) {
    console.log(req.query)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    Sighting.find(modelQuery)
    .sort(sortKey).exec(function(err, sightings){
        if (err) return next(err);
        res.render('index', {
            user,
            user: req.user,
            name: req.query.name,
            sortKey
        });
    });
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
    console.log(req.params.id)
    Sighting.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.redirect('/sightings')
    })
    
}

module.exports = {
    createSighting,
    newSighting,
    showSightings,
    showDetail,
    updateSighting,
    deleteSighting

}