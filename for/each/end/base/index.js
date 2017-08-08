module.exports = baseForEachEnd;
var baseFromToEnd = require('../../../../from/to/end');
var lastIndex = require('../../../../last/key');
var isNil = require('@timelaps/is/nil');

function baseForEachEnd(list, iterator, start, stop, step) {
    return baseFromToEnd(list, iterator, isNil(start) ? 0 : start, isNil(stop) ? lastIndex(list) : stop, step || 1);
}