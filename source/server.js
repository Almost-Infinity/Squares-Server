const express = require('express');
const app = express();

const routes = require('./routes.js');

const API_VERISON = 'v1';
const PORT = process.env.PORT || 8080;

app.use(`/api/${API_VERISON}`, routes);

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
});