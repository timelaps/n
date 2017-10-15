var b = require('@timelaps/batterie');
var reduceOwn = require('.');
b.describe('reduceOwn', function () {
    b.expect(reduceOwn).toBeFunction();
    b.it('a reducer for objects', function (t) {
        var result = reduceOwn({
            a: 1,
            b: 2
        }, function (memo, value) {
            return memo + value;
        }, 1);
        t.expect(result).toBe(4);
    });
});