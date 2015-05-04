var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

// temporary data source
var users = {};

module.exports = function (passport) {
	
	/**
	 * Passport needs to be able to (de)serialize user to be used for session checking
	 * */
	passport.serializeUser(function (user, done) {
		console.log('Serializing User: ' + user.username);
		
		return done(null, user.username);
		
	});
			
	passport.deserializeUser(function (username, done) {
				
		return done(null, users[username]);
		
	});
			
	/**
	 * Passport Register Feature
	 * */
	passport.use('register', new LocalStrategy({
		passReqToCallback: true
	}, function (req, username, password, done) {
		
		// Check if user already exist before adding
		if (users[username])
			return done('Username already taken.', false);
		
		users[username] = {
			username: username,
			password: CreateHash(password)
		};
		
		return done(null, users[username]);
		
	}));
	
	/**
	 * Passport Login Feature
	 * */
	passport.use('login', new LocalStrategy({
		passReqToCallback: true
	}, function (req, username, password, done) {
		
		if ( ! users[username])
			return done('User not found.', false);
		if ( ! IsValidPassword(users[username], password) )
			return done('username/password does not match.', false);
		
		console.log('User '+ username +' successfully logged in.');
		return done(null, users[username]);
		
	}));
	
	/**
	 * Generates hash for the given string.
	 * 
	 * @param {String} str - The string to be hashed
	 * 
	 * @return {String}
	 * */
	function CreateHash(str) {
		
		return bcrypt.hashSync(str, bcrypt.genSaltSync(10), null);
		
	}
	
	/**
	 * Checks if the password is valid for a specific user.
	 * 
	 * @param {String} user
	 * @param {String} password
	 * 
	 * @return {Boolean}
	 * */
	function IsValidPassword(user, password) {
		
		return bcrypt.compareSync(password, user.password);
		
	}
	
};