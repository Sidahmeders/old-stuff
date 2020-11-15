const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

const app = express();

require('./config/passport')(passport);

app.use(express.static('public'))
app.set('view engine', 'ejs');
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(session({
    secret: 'getusga tencho',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error = req.flash('error');
    next();
});

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('mongoDB connection is up and running..'))
.catch((err) => console.log(err));

const IndexRouter = require('./routes/index.routes');
const LoginRouter = require('./routes/login.routes');
const registerRouter = require('./routes/register.routes');
const dashRouter = require('./routes/dashboard.routes');

app.use('/', IndexRouter);
app.use('/login', LoginRouter);
app.use('/register', registerRouter);
app.use('/dash', dashRouter);

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`server running on ${port}`))
