var express = require('express');
var router = express.Router();

module.exports = function (passport) {

    router.post('/login', passport.authenticate('login', {
              successRedirect: '/api/v1/auth/login/success',
              failureRedirect: '/api/v1/auth/login/failure'
          }))
          .post('/register', passport.authenticate('register', {
              successRedirect: '/api/v1/auth/register/success',
              failureRedirect: '/api/v1/auth/register/failure'
          }))
          .get('/login/success', function (req, res, next) {})
          .get('/login/failure', function (req, res, next) {})
          .get('/register/success', function (req, res, next) {})
          .get('/register/failure', function (req, res, next) {});

    return router;

};