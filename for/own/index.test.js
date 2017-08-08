var forOwn = require('.');
var b = require('@timelaps/batterie');
b.describe('forOwn', function () {
    Class.prototype = {
        one: 0,
        two: 2,
        three: 3
    };
    b.expect(forOwn).toBeFunction();
    b.expect(forOwn()).toBeUndefined();
    b.it('iterates over objects and any available keys on the prototype', function (t) {
        var previous = 0;
        var values = [];
        var indexes = [];
        forOwn(new Class(), function (value, index) {
            values.push(value);
            indexes.push(index);
        });
        t.expect(values).toEqual([1, 2]);
        t.expect(indexes).toEqual(['one', 'two']);
    }, 2);

    function Class() {
        this.one = 1;
        this.two = 2;
    }
});