var filterCommon = require('.');
var b = require('@timelaps/batterie');
var reduce = require('../reduce/from');
b.describe('filterCommon', function () {
    b.expect(filterCommon).toBeFunction();
    b.expect(filterCommon).toReturnFunction();
    var array = [1, 2, 3, 4];
    b.it('creates a curry environment for any object to be filtered', function (t) {
        var arrayFilter = makeFilter(false);
        var filtered = arrayFilter(array, basicFilter);
        t.expect(filtered).toEqual([1, 3]);
    });
    b.it('can be inverted', function (t) {
        var arrayFilter = makeFilter(true);
        var filtered = arrayFilter(array, basicFilter);
        t.expect(filtered).toEqual([2, 4]);
    });

    function makeFilter(negative) {
        return filterCommon(function () {
            return [];
        }, reduce(), function (memo, item) {
            memo.push(item);
            return memo;
        }, negative);
    }

    function basicFilter(item) {
        return item % 2;
    }
});