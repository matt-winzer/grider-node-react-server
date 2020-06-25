require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();

// environment variables
const PORT = process.env.PORT || 5000;
const { MONGO_URI, COOKIE_KEY } = process.env;

// routers
const authRoutes = require('./routes/authRoutes');

// models
require('./models/User');

// services
require('./services/passport');

// database connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 40 * 1000,
    keys: [COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/auth/google', authRoutes);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
