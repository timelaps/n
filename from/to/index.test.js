var b = require('@timelaps/batterie');
var fromTo = require('.');
b.describe('fromTo', function (t) {
    var numbers = [1, 2, 3, 4, 5];
    b.it('is a function', function (t) {
        t.expect(fromTo).toBeFunction();
    });
    b.it('can iterate through lists', function (t) {
        var counter = 0;
        debugger;
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
    numbers = numbers.concat([6]);
    b.it('can make multiple steps at once', function (t) {
        var result = fromTo(function (index, list) {
            t.expect(index).toBe(list[index] - 1);
            return list;
        }, numbers, 0, numbers.length - 1, 2);
    }, Math.ceil(numbers.length / 2));
    b.it('has inclusive ranges', function (t) {
        fromTo(function (index, list) {
            if (index >= list.length) {
                t.expect(list[index]).toBeUndefined();
            }
            return list;
        }, numbers, 0, numbers.length, 1);
    });
    b.it('will work even with larger numbers', function (t) {
        fromTo(function (index, list) {
            if (index >= list.length) {
                t.expect(list[index]).toBeUndefined();
            }
            return list;
        }, numbers, 0, numbers.length, 1);
    });
});