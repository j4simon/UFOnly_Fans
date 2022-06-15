const path = require('path')
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const app = express();
const methodOverride = require('method-override');


require('dotenv').config();
require('./db/connection')
require('./db/passport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"))
app.use(cookieParser());
app.use(session({
    secret: 'ProbedAgain!',
    resave: false,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});


app.set('port', process.env.PORT || 3000);
app.use('/', require('./routes/sightingRoutes'));
app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`)
});