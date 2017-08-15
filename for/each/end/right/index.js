var baseForEachEnd = require('../base');
var lastIndex = require('../../../../last/key');
var isNil = require('@timelaps/is/nil');
module.exports = function forEachEndRight(list, callback, start, end) {
    return baseForEachEnd(function (index) {
        return callback(list[index], index, list);
    }, list, isNil(start) ? lastIndex(list) : start, isNil(end) ? 0 : end, -1);
};