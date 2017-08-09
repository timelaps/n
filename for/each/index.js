var isArrayLike = require('@timelaps/is/array-like');
var forEachEnd = require('./end');
module.exports = function forEach(array, fn) {
    var i = 0, length = array.length;
    for (; i < length; i++) fn(array[i], i, array);
};