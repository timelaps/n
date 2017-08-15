var b = require('@timelaps/batterie');
var forEachEnd = require('.');
b.describe('forEachEnd', function () {
    var numbers = [1, 2, 3, 4, 5];
    b.it('is a function', function (t) {
        t.expect(forEachEnd).toBeFunction();
    });
    b.it('can iterate through lists', function (t) {
        var values = [];
        forEachEnd(function (index) {
            values.push(numbers[index] * 2);
        }, numbers);
        t.expect(values).toEqual([2, 4, 6, 8, 10]);
    });
    b.it('is interruptable by returning a truthy value', function (t) {
        var values = [];
        var end = forEachEnd(function (index) {
            var value = numbers[index];
            values.push(value);
            return value === 3;
        }, numbers);
        t.expect(end).toBe(2);
        t.expect(values).toEqual([1, 2, 3]);
    }, 2);
    b.it('returns the index when it is interrupted', function (t) {
        var value = forEachEnd(function (index) {
            return numbers[index] >= 3;
        }, numbers);
        t.expect(value).toBe(2);
    });
    b.it('can iterate over a subset', function (t) {
        var values = [];
        forEachEnd(function (index) {
            values.push(numbers[index]);
        }, numbers, 1, 3);
        t.expect(values).toEqual([2, 3, 4]);
    });
    b.it('can be interrupted when iterating over a subset', function (t) {
        var values = [];
        var value = forEachEnd(function (index) {
            var number = numbers[index];
            values.push(number);
            return number === 3;
        }, numbers, 1, 3);
        t.expect(values).toEqual([2, 3]);
        t.expect(value).toBe(2);
    }, 2);
    b.it('will not iterate if numbers are reversed', function (t) {
        var values = [];
        var value = forEachEnd(function (index) {
            var number = numbers[index];
            values.push(number);
            return number === 3;
        }, numbers, 3, 1);
        t.expect(values).toEqual([]);
        t.expect(value).toBe(-1);
    }, 2);
    b.it('can also have custom steps', function (t) {
        var values = [];
        forEachEnd(function (index) {
            values.push(numbers[index]);
        }, numbers, null, null, 2);
        t.expect(values).toEqual([1, 3, 5]);
    });
});