'use strict';

var gm = require('gm').subClass({imageMagick: true})
  , uploadEnv = require('../config/env').upload
  , controller = {
      uploadImage: uploadImage,
      getImage: getImage
    };

function uploadImage(req, res) {
  res.sendStatus(200);
}

function getImage(req, res) {
  gm(uploadEnv.PATH + req.params.fileName)
    .resize(req.query.w, req.query.h)
    .stream()
    .pipe(res);
}

module.exports = controller;
