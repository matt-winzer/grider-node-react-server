require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// services
require('./services/passport');

// environment variables
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

// database connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// routers
const authRoutes = require('./routes/authRoutes');

// routes
app.use('/auth/google', authRoutes);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
