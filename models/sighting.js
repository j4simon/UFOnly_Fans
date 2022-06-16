const mongoose = require('mongoose');

const sightingSchema = new mongoose.Schema({
    title: String,
    desc: String,
    location: String,
    date: String,
    tod: String,
    age: Number,

  //No Idea Where This Came From, Don't think I Need It
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true
    // }
  }, {
    timestamps: true
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  sightings: [sightingSchema],
  googleId: String
}, {
timestamps: true
});

module.exports = mongoose.model('User', userSchema)
