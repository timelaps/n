var b = require('@timelaps/batterie');
var fromTo = require('.');
b.describe('fromTo', function (t) {
    var numbers = [1, 2, 3, 4, 5];
    b.it('is a function', function (t) {
        t.expect(fromTo).toBeFunction();
    });
    b.it('can iterate through lists', function (t) {
        var counter = 0;
        fromTo(function (index, list) {
            t.expect(index).toBe(counter++);
            return list;
        }, numbers, 0, numbers.length - 1, 1);
    }, numbers.length);
    b.it('requires start and end to be passed to work properly', function (t) {
        var result = fromTo(function () {
            // would err
            t.expect(number).toBe(list[index]);
        }, numbers);
        t.expect(result).toBeUndefined();
    });
    b.it('cannot stop its iteration when a truthy value is returned', function (t) {
        var result = fromTo(function (index, list) {
            t.expect(index).toBe(list[index] - 1);
            return list;
        }, numbers, 0, numbers.length - 1, 1);
        t.expect(result).toBe(numbers);
    }, numbers.length + 1);
});