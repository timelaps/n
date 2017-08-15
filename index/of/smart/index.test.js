var smartIndexOf = require('.');
var b = require('@timelaps/batterie');
var fromTo = require('../../../from/to');
b.describe('smartIndexOf', function () {
    b.expect(smartIndexOf).toBeFunction();
    b.it('finds elements just like indexOf', function (t) {
        t.expect(smartIndexOf([1, 3, 5, 7, 9], 9)).toBe(4);
    });
    b.it('will break if the elements are not sorted', function (t) {
        var longlist = [4].concat(fromTo(function (index, memo) {
            return memo.concat([1, 2, 3, 5, 6, 7, 8, 9]);
        }, [], 0, 20, 1));
        t.expect(smartIndexOf(longlist, 4)).toBe(-1);
    });
});