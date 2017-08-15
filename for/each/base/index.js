var lastIndex = require('../../../last/key');
var baseFromTo = require('../../../from/to');
module.exports = function baseForEach(iterator, list, step_) {
    var greaterThanZero, step = step_ || 1,
        last = lastIndex(list);
    return baseFromTo(iterator, list, (greaterThanZero = step > 0) ? 0 : last, greaterThanZero ? last : 0, step);
};