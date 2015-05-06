var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport) {

    /**
     * Serialize User Session
     * 
     * @param  {Object} user - User model
     * @param  {Function} done - Done callback for passport
     */
    passport.serializeUser(function (user, done) {

        done(null, false, { message: 'Serialize User: ' + user.id });

    });

    /**
     * Deserialize User Session
     * 
     * @param  {Object} user - User model
     * @param  {Function} done - Done callback for passport
     */
    passport.deserializeUser(function (id, done) {

        done(null, false, { message: 'Deserialize User' });

    });

    /**
     * Passport Login
     * 
     * @return {Promise}
     */
    passport.use('login', new LocalStrategy({
                passReqToCallback: true
            }, function (req, username, password, done) {
            }));

    /**
     * Passport Register
     * 
     * @return {Promise}
     */
    passport.use('register', new LocalStrategy({
                passReqToCallback: true
            }, function (req, username, password, done) {
            }));

    /**
     * Convert string to a random hash salted string.
     * 
     * @param {String} str - The string to be hashed/
     * 
     * @return {String}
     */
    function CreateHash(str) {

        return bCrypt.hashSync(str, bCrypt.genSaltSync(10), null);

    }

    /**
     * Checks if the entered user password matches with the database.
     * 
     * @param {Object} user     - The user object
     * @param {String} password - The entered password
     *
     * @return {Boolean}
     */
    function IsValidPassword(user, password) {

        return bCrypt.compareSync(password, user.password);

    }

};