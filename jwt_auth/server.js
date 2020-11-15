require('dotenv').config()

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {userName: 'the best one', title: 'the king of muscle'},
    {userName: 'second best shot', title: 'body Builder'}
]

app.get('/posts', (req, res) => {
    res.json(posts.filter(post => post.userName === req.user.name))
})

app.post('/login', authenticateToken, (req, res) => {
    //! user Authenticate

    const username = req.body.name;
    const user = {user: username};
    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_KEY);
    res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


app.listen(3004)
