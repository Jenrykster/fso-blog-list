require('dotenv').config();

const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const blogRouter = require('./controllers/blog');

const { PORT, MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to: ', MONGODB_URI);
  })
  .catch((err) => console.err(err));

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
