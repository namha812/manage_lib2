var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var models  = require('../models');
passport.use(new LocalStrategy({
  usernameField: 'user[userName]',
  passwordField: 'user[password]'
}, async function(email, password, done) {
  User.findOne({email: email}).then(function(user){
      let user = await models.users.findOne({
            where: {
                userName: 'namha', password: '1234'
            },

        });
    if(!user || !user.validPassword(password)){
      return done(null, false, {errors: {'email or password': 'is invalid'}});
    }

    return done(null, user);
  }).catch(done);
}));