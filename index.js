const express = require('express');
const { connect } = require('./utils/db');
const app = express();

connect();

const articleRouter = require('./routes/article');
app.use('/', articleRouter);
app.use('/article', articleRouter);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});