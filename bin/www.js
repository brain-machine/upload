var app = require('../app.js')
  , env = require('../config/env').api;

var server = app.listen(env.PORT, function() {
  console.log('Server listening on port ' + server.address().port);
});
