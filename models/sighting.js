const mongoose = require('mongoose');

const sightingSchema = new mongoose.Schema({
    title: String,
    desc: String,
    location: String,
    date: String,
    tod: String,
    age: Number,

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }, {
    timestamps: true
})

module.exports = mongoose.model('Sighting', sightingSchema)