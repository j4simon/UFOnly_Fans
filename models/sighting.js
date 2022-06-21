const mongoose = require('mongoose');

const sightingSchema = new mongoose.Schema({
    title: String,
    desc: String,
    location: String,
    date: String,
    tod: String,
    age: Number

  }, {
    timestamps: true
})



module.exports = mongoose.model('Sighting', sightingSchema)
