const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('register');
})

router.post('/', (req, res) => {
    
    const {name, email, password, password2} = req.body;
    const errors = [];

    if(!name || !email || !password || !password2) {
        errors.push({msg: "please fill all the required fields"})
    }

    if(password.length < 6) {
        errors.push({msg: "your password should be at least 6 characters"})
    }

    if(password !== password2) {
        errors.push({msg: "your password does not match"})
    }

    if(errors.length > 0) {
        res.render('register', {
            name,
            email,
            password,
            password2,
            errors
        })
    } else {
        User.findOne({email: email})
        .then(user => {
            if(user) {
                errors.push({msg: 'This User Already Exist'})
                res.render('register', {
                    name,
                    email,
                    password,
                    password2,
                    errors
                });
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password , salt, (err, hash) => {
                        if (err) throw err;
                        const newUser = new User({
                            name: name,
                            email: email,
                            password: hash
                        });
                        newUser.save()
                        .then(() => {
                            req.flash('success_msg', 'You are now Registered and can Login ')
                            res.redirect('/login');
                            console.log('new user added');
                        })
                        .catch(err => console.log(err))
                    });
                });
            }
        })
    }

});


module.exports = router;
