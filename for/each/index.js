var isArrayLike = require('@timelaps/is/array-like');
var forEachEnd = require('./end');
module.exports = function forEach(array, fn) {
    forEachEnd(array, function () {
        fn.apply(this, arguments);
    });
};