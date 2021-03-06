var b = require('@timelaps/batterie');
var baseIndexOf = require('.');
var forEachEnd = require('../../../for/each/end');
var forEachEndRight = require('../../../for/each/end/right');
var isEqual = require('@timelaps/is/equal');
var isStrictlyEqual = require('@timelaps/is/strictly-equal');
var baseIndexOf = require('.');
b.describe('baseIndexOf', function () {
    b.expect(baseIndexOf).toBeFunction();
    b.it('acts as a gatekeeper for the logic of finding an element only the first is needed, the rest are implied', function (t) {
        t.expect(function () {
            baseIndexOf()([1, 2, 3]);
        }).toThrow();
    });
    b.it('needs the first one to know how to find an element', function (t) {
        var indexOf = baseIndexOf(forEachEnd);
        t.expect(indexOf([1, 2, 3], 2)).toBe(1);
    });
    b.it('the second is used for the comparison logic', function (t) {
        var indexOf = baseIndexOf(forEachEnd, isEqual);
        t.expect(indexOf([{},
            [], {}
        ], [])).toBe(1);
    });
    b.it('the third and fourth are for alternative routes', function (t) {
        var indexOf = baseIndexOf(forEachEnd, isStrictlyEqual, function (lookingfor) {
            return lookingfor > 5;
        }, forEachEndRight);
        t.expect(indexOf([3, 5, 7, 9, 7, 5, 3], 3)).toBe(0);
        t.expect(indexOf([3, 5, 7, 9, 7, 5, 3], 7)).toBe(4);
    }, 2);
});