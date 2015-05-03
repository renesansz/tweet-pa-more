var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
	
	if (req.method === 'GET') // Let's allow GET request to come through
		return next();
	if ( ! req.isAuthenticated())
		return res.redirect('/login');
		
	return next();
	
});
// @todo Replace with real-data from MongoDB
// Route for all posts
router.route('/posts')
	  .get(function (req, res) {
		  
		  res.send({ message: 'GET request success!' });

	  })
	  .post(function (req, res) {
		  
		  res.send({ message: 'POST request success!' });

	  })
	  .put(function (req, res) {
		  
		  res.send({ message: 'PUT request success!' });

	  })
	  .delete(function (req, res) {
		  
		  res.send({ message: 'DELETE request success!' });

	  });

// Route for specific post
router.route('/posts/:id')
	  .get(function (req, res) {
		  
		  res.send({ message: 'GET request success for ID: ' + req.params.id });

	  })
	  .post(function (req, res) {
		  
		  res.send({ message: 'Undefined Method' });

	  })
	  .put(function (req, res) {
		  
		  res.send({ message: 'PUT request success for ID: ' + req.params.id });

	  })
	  .delete(function (req, res) {
		  
		  res.send({ message: 'DELETE request success for ID: ' + res.params.id });
		  
	  });

module.exports = router;