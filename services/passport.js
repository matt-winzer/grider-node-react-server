const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// environment variables
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

// models
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch(console.error);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      const { id } = profile;
      User.findOne({ googleId: id })
        .then((existingUser) => {
          if (existingUser) {
            // already have record with given profile id
            done(null, existingUser);
          } else {
            // no user record currently, create record
            new User({ googleId: id })
              .save()
              .then((newUser) => done(null, newUser))
              .catch(console.error);
          }
        })
        .catch(console.error);
    }
  )
);
