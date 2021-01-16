require('dotenv-safe').config();

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { secret } = require('./app/config/config');

const app = new express();
const port = process.env.PORT;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(secret)); // for parsing cookies

app.use('/static', express.static(path.join(__dirname, '../static'))); // for serving static files
app.use('/api', routes); // for using Router routes

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});