module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }

        req.flash('error', 'please login to view this page');
        res.redirect('/login')
    }
}

