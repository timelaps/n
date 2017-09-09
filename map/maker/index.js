var isEmptyArray = require('@timelaps/is/empty-array');
var isString = require('@timelaps/is/string');
var isKey = require('@timelaps/is/key');
var cached = require('@timelaps/returns/base-type');
module.exports = mapMaker;

function mapMaker(iterator, iterable, returnBaseType_) {
    var returnBaseType = returnBaseType_ || cached;
    return function curriedMap(objs, iterates) {
        var collection = returnBaseType(objs);
        // ,
        //     iterates = isKey(iteratee) ? function (item) {
        //         return item && item[iteratee];
        //     } : iteratee;
        if (objs) {
            iterator(objs, iterable(collection, iterates, collection.length === 0, objs));
        }
        return collection;
    };
}