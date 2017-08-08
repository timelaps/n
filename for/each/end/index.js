var isArrayLike = require('@timelaps/is/array-like');
module.exports = function forEach(array, fn) {
    if (!isArrayLike(array)) {
        return;
    }
    for (var i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)) {
            return i;
        }
    }
};