var iterateIn = require('.');
var b = require('@timelaps/batterie');
var forEach = require('../../for/each');
b.describe('iterateIn', function () {
    b.expect(iterateIn).toBeFunction();
    b.expect(iterateIn()).toBeFunction();
    b.it('provides an iterator that will go through all keys', function (t) {
        Class.prototype = {
            b: 2
        };
        var iterator = iterateIn(new Class(), function (value, key, obj) {
            t.expect(value).toBe(obj[key]);
        });
        forEach(iterator.keys, iterator);

        function Class() {
            this.a = 1;
        }
    });
});