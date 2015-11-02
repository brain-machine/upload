var app = require('../app.js')
  , env = require('../config/env');

var server = app.listen(env.api.PORT, function() {
  console.log('Server on Port: ' + server.address().port);
  console.log('Upload Path: ' + env.upload.PATH);
});
