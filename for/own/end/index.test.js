var b = require('@timelaps/batterie');
var forOwnEnd = require('.');
b.describe('forOwnEnd', function () {
    b.expect(forOwnEnd).toBeFunction();
    b.it('iterates over enumerable object keys', function (t) {
        var obj = {
            n: 1
        };
        forOwnEnd(obj, function (value, key, object) {
            t.expect(value).toBe(1);
            t.expect(key).toBe('n');
            t.expect(object).toBe(obj);
        });
    }, 3);
});