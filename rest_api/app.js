const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');


//* body-parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//* Import Routes
const postsRoute = require('./routes/posts')

//* post route middleware
app.use('/posts', postsRoute)

//* ROUTES
app.get('/', (req, res) => {
    res.send('WE ARE AT HOME') 
})

//* connect to DB
mongoose.connect( process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connceted to db')
})

app.listen(3000)


