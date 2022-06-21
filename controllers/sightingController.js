const Sighting = require('../models/sighting')
const User = require('../models/user')



function index(req, res, next) {
    console.log(req.query)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users){
        if (err) return next(err);
        console.log(req.user)
        res.render('index', {
            users,
            user: req.user,
            name: req.query.name,
            sortKey, 
        });
    });
}

function createSighting(req, res){
    console.log("This is my test ", res.locals)

    // User.findById(req.user._id)
    
    req.user.sightings.push(req.body);
    req.user.save(function(err) {
        res.redirect('/sightings')

    })
    // let newSighting = new Sighting(req.body)
    // console.log(newSighting)
    // newSighting.save(() => console.log("Sighting saved!"))
    // res.redirect('/sightings')
}

function newSighting(req, res){
    res.render('newSighting')
}

async function showSightings(req, res){
    let user = await User.findById(req.user._id)
    console.log(user)
    res.render('index', {user})
}

function showDetail(req, res){
    console.log("Show Detail function ran")
    console.log(req.params)
    Sighting.findById(req.params.id).then((sighting) =>{
        console.log("My sigting to edit" + sighting)
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