const express = require('express')
const app = express()
const Joi = require('joi')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
]

app.get('/', (req, res) => {
    res.send('Hello World')
}) 

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id == parseInt(req.params.id))
    if(!course) return res.status(404).send('Nothing was Found')
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    let course = {id: courses.length+1, name: req.body.name }
    courses.push(course)
    res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
    //* look up the Course
    let course = courses.find(c => c.id == parseInt(req.params.id))
    if(!course) return res.status(404).send('404 Course Not Found to Up Date')
    
    //* validate the Course
    const { error } = validateCourse(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    //* UpDate The Course
    course.name = req.body.name
    res.send(course)
})

function validateCourse(course) {
    let schema = { name: Joi.string().min(4).required() }
    return Joi.validate(course, schema)

}

app.delete('/api/courses/:id', (req, res) => {
    //* look up the Course
    let course = courses.find(c => c.id == parseInt(req.params.id))
    if(!course) return res.status(404).send('404 Course Not Found to delete')
    //* Delete The Course
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

const port = process.env.PORT || 2200
app.listen(port, () => {
    console.log(`listening to The port ${port}...`)
})

