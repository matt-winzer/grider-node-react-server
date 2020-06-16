const express = require('express');
const passport = require('passport');

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
