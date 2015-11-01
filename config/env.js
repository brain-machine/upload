'use strict';

var env = {
    api: { PORT: '3000' },
    db: {
        DB_URI: 'mongodb://localhost/uploads',
        DB_CREDENTIAL: { user: '', pass: '' }
    }
};

module.exports = {
    api: Object.freeze(env.api),
    db: Object.freeze(env.db)
};
