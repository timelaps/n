var b = require('@timelaps/batterie');
var fromToEnd = require('.');
b.describe('fromToEnd', function () {
    var numbers = [1, 2, 3, 4, 5];
    b.it('is a function', function (t) {
        t.expect(fromToEnd).toBeFunction();
    });
    b.it('can iterate through lists', function (t) {
        fromToEnd(function (index) {
            t.expect(index).toBe(numbers[index] - 1);
        }, numbers, 0, numbers.length - 1, 1);
    }, numbers.length);
    b.it('requires start and end to be passed to work properly', function (t) {
        var res1 = fromToEnd();
        var res2 = fromToEnd(function (index) {
            return numbers[index] === 3;
        }, numbers, 0, numbers.length - 1, 1);
        t.expect(res1).toBe(-1);
        t.expect(res2).toBe(2);
    }, 2);
    b.it('can stop its iteration when a truthy value is returned', function (t) {
        var result = fromToEnd(function (index) {
            return numbers[index] === 3;
        }, numbers, 0, numbers.length - 1, 1);
        t.expect(result).toBe(2);
    });
    b.it('can stop its iteration with the range start and end values', function (t) {
        var counter = 0;
        var result = fromToEnd(function (index) {
            counter++;
            return numbers[index] === 5;
        }, numbers, 1, 3, 1);
        t.expect(counter).toBe(3);
        t.expect(result).toBe(-1);
    }, 2);
});