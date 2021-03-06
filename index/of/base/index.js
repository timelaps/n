module.exports = baseIndexOf;
var _indexOfNaN = require('../nan'),
    isNan = require('@timelaps/is/nan'),
    isStrictlyEqual = require('@timelaps/is/strictly-equal');

function indexOfNaN(a, b, c, d) {
    return _indexOfNaN(a, c, d);
}

function baseIndexOf(checkFullArray, exposure_, filter_, alternative_) {
    var filter = filter_ || isNan,
        alternative = alternative_ || indexOfNaN,
        exposure = exposure_ || isStrictlyEqual;
    return function (array, value, fromIndex, toIndex, fromRight) {
        var index, limit, incrementor;
        if (!array || !array.length) {
            return -1;
        } else if (filter(value)) {
            return alternative(array, comparator, fromIndex, toIndex);
        } else {
            return checkFullArray(array, comparator, fromIndex, toIndex);
        }

        function comparator(item) {
            return exposure(value, item);
        }
    };
}