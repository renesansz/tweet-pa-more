var express = require('express');
var router = express.Router();

module.exports = function(passport) {
	
	router.get('/success', function (req, res) {
		      res.send({ status: 'success', user: req.user ? req.user : null, message: ''});
		  })
		  .get('/failed', function (req, res) {
		      res.send({ status: 'failed', user: null, message: 'Invalid username or password.'});
		  })
		  .post('/login', passport.authenticate('login', {
			  successRedirect: '/auth/success',
			  failureRedirect: '/auth/failed'
		  }))
		  .post('/register', passport.authenticate('register', {
			  successRedirect: '/auth/success',
			  failureRedirect: '/auth/failed'
		  }))
		  .get('/logout', function (req, res) {
			  req.logout();
			  res.redirect('/');
		  });
	
	return router;
};