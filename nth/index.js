module.exports = nth;
var toNumber = require('@timelaps/hacks/to-number');

function nth(array, index) {
    var idx = toNumber(index);
    if (array && idx !== -1) {
        return array && array[idx];
    }
}