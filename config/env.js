'use strict';

var env = {
    api: { PORT: '3000' },
    upload: { PATH: '/uploads/' }
};

module.exports = {
    api: Object.freeze(env.api),
    upload: Object.freeze(env.upload)
};
