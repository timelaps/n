module.exports = property;
var get = require('../../get');
var isEqual = require('@timelaps/is/equal');

function property(pair, extent_) {
    var extent = extent_ || isEqual,
        key = pair[0],
        value = pair[1];
    return function (item) {
        return extent(get(item, key), value);
    };
}