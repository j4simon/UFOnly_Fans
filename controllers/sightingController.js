const { findByIdAndUpdate } = require('../models    Sighting')
const Sighting = require('../models/sighting')

const index = (req, res, next) => {
    Sighting.find({})
    .populate('owner')
    .then(ufo => res.render('index.ejs'))
}


let show = (req, res) => {
    Sighting.findById(req.params.id, (err, ufo) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(ufo)
    })
}

let create = (req, res) =>{
        console.log(req.body)
    Sighting.create(req.body, (err, ufo) =>{
        if(err){
            res.status(400).json(err)
            return        
        }
        res.jason(ufo)
    })
}

let deleteUFO = (req, res) => {
    Sighting.findByIdAndDelete(req.params.id, (err, ufo) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json({message:'Sighting deleted'})
    })
}

let update = (req, res) => {
    Sighting,findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, ufo) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(ufo)
    })
}


module.exports = {
    index,
    show,
    create,
    deleteUFO,
    update

}