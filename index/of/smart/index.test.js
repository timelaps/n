var smartIndexOf = require('.');
var b = require('@timelaps/batterie');
var map = require('../../../map');
b.describe('smartIndexOf', function () {
    b.expect(smartIndexOf).toBeFunction();
    b.it('finds elements just like indexOf', function (t) {
        t.expect(smartIndexOf([1, 3, 5, 7, 9], 9)).toBe(4);
    });
    b.it('will break if the elements are not sorted', function (t) {
        var base = [4];
        var longlist = base.concat.apply(base, map({
            length: 20
        }, function (value, index) {
            return [1, 2, 3, 5, 6, 7, 8, 9];
        }));
        t.expect(smartIndexOf(longlist, 4)).toBe(-1);
    });
});