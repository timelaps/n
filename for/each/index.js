var isArrayLike = require('@timelaps/is/array-like');
var forEachEnd = require('./end');
module.exports = function forEach(array, fn) {
    forEachEnd(array, function () {
        // doesn't return anything... ever
        fn.apply(this, arguments);
    });
};