module.exports = smartIndexOf;
var sortedIndexOf = require('../sorted'),
    indexOf = require('..'),
    isTrue = require('@timelaps/is/true');

function smartIndexOf(array, item, _from, _to) {
    return (array && array.length > 100 ? sortedIndexOf : indexOf)(array, item, _from, _to);
}