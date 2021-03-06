var iterate = require('.');
var b = require('@timelaps/batterie');
var forEach = require('../for/each');
b.describe('iterate', function () {
    b.expect(iterate).toBeFunction();
    b.it('returns a function', function (t) {
        t.expect(iterate()).toBeFunction();
    });
    b.it('errs if that function is called', function (t) {
        t.expect(iterate()).toThrow();
    });
    b.it('expects a function', function (t) {
        t.expect(iterate(function () {})).notToThrow();
    });
    b.it('will return yet another function', function (t) {
        t.expect(iterate(function () {})).toReturnFunction();
    });
    b.it('will run whatever function it is given according to the keys returned', function (t) {
        var counter = 0;
        var current;
        var list = ['a', 'b', 'c'];
        var obj = {
            a: 4,
            b: 3,
            c: 2
        };
        var iterable = iterate(function () {
            return list;
        })(obj, checker);
        forEach(list, function (key) {
            current = key;
            iterable(key);
            counter++;
        });
        t.expect(counter).toBe(3);

        function checker(value, key) {
            t.expect(key).toBe(list[counter]);
            t.expect(value).toBe(obj[key]);
        }
    }, 7);
});