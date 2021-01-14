require('dotenv-safe').config();

const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = new express();
const port = process.env.PORT;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/static', express.static(path.join(__dirname, '../static'))); // for serving static files
app.use('/api', routes); // for using Router routes

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});