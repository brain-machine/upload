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

// config MongoDB using mongoose
require('./config/db-config');

module.exports = app;
