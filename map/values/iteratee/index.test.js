var b = require('@timelaps/batterie');
var mapValuesIteratee = require('.');
b.describe('mapValuesIteratee', function () {
    b.expect(mapValuesIteratee).toBeFunction();
    b.expect(mapValuesIteratee).toReturnFunction();
    b.it('chooses the correct function based on what is passed to it', function (t) {
        var array = [];
        mapValuesIteratee(array, function (value) {
            return value * 5;
        }, true, [5])(5, 0);
        t.expect(array).toEqual([25]);
    });
    b.it('also works with objects', function (t) {
        var object = {};
        mapValuesIteratee(object, function (value, index) {
            return value * 5;
        }, false, {
            a: 1
        })(1, 'a');
        t.expect(object).toEqual({
            a: 5
        });
    });
});