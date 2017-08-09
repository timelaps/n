var isNan = require('@timelaps/is/nan');
var forEachEndRight = require('../../../for/each/end/right');
module.exports = indexOfNaN;

function indexOfNaN(array, fromIndex, toIndex) {
    return forEachEndRight(array, isNan, fromIndex, toIndex);
}