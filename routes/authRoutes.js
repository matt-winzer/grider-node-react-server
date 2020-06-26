const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/callback', passport.authenticate('google'));

router.get('/logout', (req, res) => {
  req.logout();
  res.json({
    message: 'You have been logged out.',
    user: req.user,
  });
});

module.exports = router;
