const path = require('path')
const express = require('express')
const morgan = require('morgan')
const pug = require('pug')
var bodyParser = require('body-parser')
const viewRouter = require('./routes/viewRouter')
const authRouter = require('./routes/authRouter')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();
const { ensureAuthenticated, forwardAuthenticated } = require('./configs/auth');

require('./configs/passport')(passport);


app.set('view engine', 'pug')
app.set('views' , path.join(__dirname , 'views'))

app.use(express.static(path.join(__dirname , 'public')))

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Express session
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
);


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.use('/', viewRouter);
app.use('/api/v1', authRouter);
module.exports = app;

