'use strict';

var express = require('express')
  , bodyParser = require('body-parser')
  , compress = require('compression')
  , cors = require('cors')
  , app = express();

// Config App
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compress());
app.use(cors());

// Config Routes
app.use('/image', require('./routes/image-route'));

module.exports = app;
