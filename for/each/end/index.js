var u, isArrayLike = require('@timelaps/is/array-like'),
    lastIndex = require('../../../last/key'),
    forEachEndBase = require('../../../from/to');
module.exports = function forEach(array, fn) {
    return isArrayLike(array) ? forEachEndBase(array, fn, 0, lastIndex(array), 1) : u;
};