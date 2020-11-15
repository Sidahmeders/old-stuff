const express = require('express')
const path  = require('path')
const app = express();
const expressHandler = require('express-handlebars')
const logger = require('./middleware/logger')
const members = require('./Members')

//* init middleware
app.use(logger)

//* handlebars middleware
app.engine('handlebars', expressHandler())
app.set('view engine', 'handlebars');

//* homepage route
app.get('/handle', (req, res) => res.render('index', {
    title: "member XXX james Bond",
    members
}))

//* body-parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//* set static folder
app.use(express.static(path.join(__dirname, 'public')))

//* members api routes
app.use('/api/members', require('./Routes/apis/members'))


app.listen(3000, () => console.log('server Running... '))
