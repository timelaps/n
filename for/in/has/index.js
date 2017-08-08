var forIn = require('../');
var has = require('../../../has');
module.exports = function forOwn(object, fn) {
    forIn(object, function (value, key) {
        if (has(object, key)) {
            fn(value, key, object);
        }
    });
};