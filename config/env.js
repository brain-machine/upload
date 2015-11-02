'use strict';

var env = {
    api: { PORT: process.env.UPLOAD_PORT || '3000' },
    upload: { PATH: process.env.UPLOAD_PATH || '/uploads/' }
};

module.exports = {
    api: Object.freeze(env.api),
    upload: Object.freeze(env.upload)
};
