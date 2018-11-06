const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

// server logs help with debugging (even in production environments)
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')));

// Handle 500 errors
app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Your server, listening on port ${port}`);
});
