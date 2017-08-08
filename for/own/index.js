var forEach = require('../each');
var keys = require('../../keys');
module.exports = function forOwn(object, fn) {
    forEach(keys(object), function (key) {
        fn(object[key], key, object);
    });
};