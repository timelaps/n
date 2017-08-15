var b = require('@timelaps/batterie');
var baseForEach = require('.');
b.describe('baseForEach', function (t) {
    var numbers = [1, 2, 3, 4, 5];
    b.it('is a function', function (t) {
        t.expect(baseForEach).toBeFunction();
    });
    b.it('can iterate through lists', function (t) {
        baseForEach(function (index, list) {
            t.expect(list[index]).notToBeUndefined();
            return list;
        }, numbers);
    }, numbers.length);
    b.it('returns its memo', function (t) {
        var result = baseForEach(function (index) {
            return true;
        }, numbers);
        t.expect(result).toBeTrue();
    });
    b.it('does not work on objects', function (t) {
        var object = {
            one: 1,
            two: 2
        };
        baseForEach(function (number, index, list) {
            t.expect(true).toBe(false);
        }, object);
        t.expect(object).toBeObject();
    });
});