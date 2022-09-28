const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const { MONGODB_URI } = require('./utils/config');
const blogRouter = require('./controllers/blog');

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info('connected to: ', MONGODB_URI);
  })
  .catch((err) => logger.error(err));

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);

module.exports = app;
