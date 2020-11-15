const express = require('express');
const router = express.Router();
const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const passport = require('passport');


router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', (req, res) => {
    const { name, email, password, password2} = req.body;
    let errors = [];
    if(!name, !email, !password, !password2) {
        errors.push({msg: 'please fill all the required fields'})
    }

    if(password !== password2) {
        errors.push({msg: 'password do not match'})
    }

    if(password.length < 6) {
        errors.push({msg: 'password length should be at least 6 characters'})
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
                errors.push({msg: 'this Email already exist'})
                res.render('register', {
                    name,
                    email,
                    password,
                    password2,
                    errors
                })
            } else {
                const newUser = new User({
                    name: name,
                    email: email,
                    password, password
                });
                
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) console.log(err);
                        newUser.password = hash;
                        newUser.save()
                        .then(() => {
                            req.flash('success_msg', 'you are now rgistered and can login');
                            res.redirect('/users/login');
                        })
                        .catch(err => console.log(err)) 
                    });
                });
            }
        });
    }

});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');

});


module.exports = router;
