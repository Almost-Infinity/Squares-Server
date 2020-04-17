const express = require('express');
const app = express();
app.disable('x-powered-by');

const routes = require('./routes.js');
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  if (req.headers.origin === 'http://localhost:1337') {
    res.set('Access-Control-Allow-Origin', req.headers.origin);
    next();
  }
  res.status(403).send();
});

app.use(`/api`, routes);

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
});