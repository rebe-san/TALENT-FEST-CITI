const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const bodyParser = require('body-parser');
const cors = require("cors");



const app = express();
require("dotenv").config();
// Bodyparser Middleware
app.use(express.json());
app.use(cors());
// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use(bodyParser.urlencoded({ extended: false }));


// app.get('/api/greeting', (req, res) => {
//     const name = req.query.name || 'World';
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// serves the built version of your react app
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// for your REST calls, append api to the beginning of the path
// ex: 
app.get('/api/users', async (req, res) => {
  try {
    res.json(await User.find())
    // Post is a mongoose schema we've defined in /models
    // .find() is a method on the model for fetching all documents
  } catch (err) {
    res.json({message: err})

  }
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));