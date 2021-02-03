require('dotenv-safe').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { secret } = require('./app/config/config');

const app = new express();
const port = process.env.PORT;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
}

app.use(cors(corsOptions)); // for enabling cross-origin requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(secret)); // for parsing cookies

app.use('/api', routes); // for using Router routes

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});