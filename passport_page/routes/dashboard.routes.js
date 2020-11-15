const express = require('express');
const {ensureAuthenticated } = require('../config/auth');

const router = express.Router();

router.get('/welcome', ensureAuthenticated, (req, res) => {
    res.render('welcome', {user: req.user})
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'you are logged out');
    res.redirect('/login')
});

module.exports = router;
