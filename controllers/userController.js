const { findByIdAndUpdate } = require('../models/user')
const User = require('../models/user')

const index = (req, res, next) => {
    console.log("index function reached")
    // User.find({})
    // .populate('owner')
    // .then(ufo => res.json(ufo)) 
    res.render('index.ejs')
}


let show = (req, res) => {
    User.findById(req.params.id, (err, ufo) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(ufo)
    })
}

let create = (req, res) =>{
        console.log(req.body)
    User.create(req.body, (err, ufo) =>{
        if(err){
            res.status(400).json(err)
            return        
        }
        res.jason(ufo)
    })
}

let deleteUFO = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, ufo) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json({message:'Sighting deleted'})
    })
}

let update = (req, res) => {
    User,findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, ufo) =>{
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