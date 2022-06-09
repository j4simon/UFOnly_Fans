require('./connection')
const User = require('../models/user')

const Sighting = require('../models/sighting')
const sightingseeds = require('./seeds.json')

// Delete all bookmarks in the database
Sighting.deleteMany({})
// them delete all our Users
.then(()=> User.deleteMany({}) )
.then(() => {
    // then returns updates bookmarks with a owner: user._id
    // first creates user, then maps over bookmarks and adds that id in 
    return User.create({name: "billie", birthDay: '1-6'})
    .then( user => {
        return bookmarkseeds.map(bookmark => ({...bookmark, owner: user._id}))
    })
})
.then((bookmarks)=>{
    // return newly Inserted bookmarks into the db
    return Bookmark.insertMany(bookmarks)
})
.then((bookmarks)=>{
    console.log(bookmarks)
})
.catch(console.error)
.finally(()=>{
    process.exit()
})

