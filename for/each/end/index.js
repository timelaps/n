var u, isArrayLike = require('@timelaps/is/array-like'),
    lastIndex = require('../../../last/key'),
    forEachEndBase = require('../../../from/to/end');
module.exports = function forEachEnd(array, fn) {
    return forEachEndBase(function (index) {
        return fn(array[index], index, array);
    }, array, 0, lastIndex(array), 1);
};