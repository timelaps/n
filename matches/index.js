module.exports = match;
var keys = require('../keys');
var toObject = require('@timelaps/to/object');
var forEachEnd = require('../for/each/end');
var toBoolean = require('@timelaps/hacks/to-boolean');
var isEqual = require('@timelaps/is/equal');

function match(object, attrs, extent_) {
    var extent = extent_ || isEqual,
        keysResult = keys(attrs),
        obj = toObject(object);
    return !toBoolean(forEachEnd(keysResult, iterates) + 1);

    function iterates(key) {
        return !extent(attrs[key], obj[key]);
    }
}