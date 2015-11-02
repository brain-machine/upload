var express = require('express')
  , controller = require('../contollers/image-controller')
  , uploadEnv = require('../config/env').upload
  , upload  = require('multer')({ dest: uploadEnv.PATH })
  , router = express.Router();

router.post('/', upload.single('image'), controller.uploadImage);
router.get('/:fileName', controller.getImage);

module.exports = router;
