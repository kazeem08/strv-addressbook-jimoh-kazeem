const passport = require('passport')
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const UserModel = require('../models/user')


passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'kazeem'
},
  function (jwtPayload, done) {
    return UserModel.findById(jwtPayload.userId)
      .then(user => {
        console.log('YUUUSUUS', user)
        return done(null, user);
      }
      ).catch(err => {
        return done(err);
      });
  }
))
