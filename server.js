var express = require('express');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var app = express();

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new FacebookStrategy({
    clientID: 156440871505040,
    clientSecret: 159013b5d98dd3dcbe3c7144b3f4cfb0,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  }, function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

app.listen(8080, function() {
  console.log('What what?!')
});
