const express = require('express');
const app = express();
const termekRoutes = require('./routes/termekRoutes');

app.use(express.json());
app.use('/api/termekek', termekRoutes);
module.exports = app;