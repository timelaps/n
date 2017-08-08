var baseForEachEnd = require('../end/base');
var lastIndex = require('../../../last/key');
var isNil = require('@timelaps/is/nil');
var valueCheck = require('../../value-check');
module.exports = function baseForEachEndRight(list, callback, start, end) {
    return baseForEachEnd(list, callback, isNil(start) ? lastIndex(list) : start, isNil(end) ? 0 : end, -1);
};