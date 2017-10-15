var reduction = require('.');
var b = require('@timelaps/batterie');
var generate = require('@timelaps/fn/generator/indices');
b.describe('reduction', function () {
    b.expect(reduction).toBeFunction();
    b.it('is a generalized reduce', function (t) {
        var list = [];
        var array = [1, 2, 3, 4];
        var generator = generate(array);
        t.expect(reduction(generator, array, function (memo, value) {
            list.push(value);
            return memo + value;
        }, 0)).toBe(10);
        t.expect(list.sort()).toEqual(array);
    }, 2);
});