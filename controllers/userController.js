// const { findByIdAndUpdate } = require('../models/user')
const User = require('../models/user')

const index = (req, res, next) => {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, user) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('UFOnly_Fans/index', {
        users,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
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