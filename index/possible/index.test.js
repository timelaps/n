var possibleIndex = require('.');
var b = require('@timelaps/batterie');
b.describe('possibleIndex', function () {
    b.it('gets the length of the array minus 1', [
        ['has a lower limit', possibleIndex(-5), 0],
        ['has an upper limit', possibleIndex(1e1000), require('@timelaps/constants/max-array-index')],
        ['if it is a possible index it will use that', possibleIndex(5), 5]
    ]);
});