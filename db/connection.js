
const mongoose = require('mongoose')

//connect to database
mongoose.connect('mongodb://localhost:27017/UFOnly_Fans', {
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})