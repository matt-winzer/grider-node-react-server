require('dotenv').config();
require('./services/passport');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// routers
const authRoutes = require('./routes/authRoutes');

// routes
app.use('/auth/google', authRoutes);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
