const path = require('path')
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();


require('dotenv').config();
require('./db/connection')
require('./config/passport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'ProbedAgain!',
    resave: false,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());


app.set('port', process.env.PORT || 3000);
app.use('/', require('./routes/userRoutes'));
app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`)
});