var keys = require('../../../keys');
var forEachRight = require('../../each/right');
module.exports = function forOwnRight(array, fn) {
    forEachRight(keys(object), function (key) {
        fn(object[key], key, object);
    });
};