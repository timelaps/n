var isUndefined = require('@timelaps/is/undefined');
var keyGenerator = require('../key-generator');
module.exports = function reduction(accessor, iteratee, memo_, dir, startsAt1) {
    var value, nextMemo, next, memo = memo_,
        generated = keyGenerator(accessor, dir);
    if (startsAt1) {
        if (isUndefined(next = generated())) {
            return memo;
        } else {
            memo = accessor[next];
        }
    }
    while (!isUndefined(next = generated())) {
        memo = iteratee(memo, accessor[next], next, accessor);
    }
    return memo;
};