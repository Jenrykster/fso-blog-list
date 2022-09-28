const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');
const blogRouter = require('./controllers/blog');

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to: ', MONGODB_URI);
  })
  .catch((err) => console.err(err));

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);

module.exports = app;
