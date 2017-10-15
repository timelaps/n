var b = require('@timelaps/batterie');
var keyGenerator = require('.');
b.describe('keyGenerator', function () {
    b.expect(keyGenerator).toBeFunction();
    b.expect(keyGenerator).toReturnFunction();
    b.it('chooses the correct key generator for a given object', function (t) {
        var gen = keyGenerator([7, 6, 5]);
        t.expect(gen()).toBe(0);
        t.expect(gen()).toBe(1);
        t.expect(gen()).toBe(2);
        t.expect(gen()).toBeUndefined();
    }, 4);
    b.it('can also do so for objects', function (t) {
        debugger;
        var gen = keyGenerator({
            a: 1,
            b: 2,
            c: 3
        });
        t.expect(gen()).toBe('a');
        t.expect(gen()).toBe('b');
        t.expect(gen()).toBe('c');
        t.expect(gen()).toBeUndefined();
    }, 4);
});