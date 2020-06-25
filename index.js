require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// environment variables
const PORT = process.env.PORT || 5000;
const { MONGO_URI } = process.env;

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

// routes
app.use('/auth/google', authRoutes);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
