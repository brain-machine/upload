'use strict';

var mongoose = require('mongoose')
  , env = require('./env').db;

// configure a mongoose connection
mongoose.connect(env.DB_URI, env.DB_CREDENTIAL);

// configure connection listeners
mongoose.connection
.on('connected', function () {
    console.log('MongoDB connected.');
}).on('open', function () {
    console.log('MongoDB open.');
}).on('disconnected', function () {
    console.log('MongoDB disconnected.');
}).on('error', function () {
    console.log('MongoDB error.');
});

// configure process listener
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('MongoDB disconnected through app termination');
        process.exit(0);
    });
});
