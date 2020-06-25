const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// environment variables
const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }
  )
);