var isUndefined = require('@timelaps/is/undefined');
module.exports = reduction;

function reduction(generator, accessFrom, iteratee, memo_, startsAt1) {
    var next, key, memo = memo_;
    if (startsAt1) {
        if (isUndefined((next = generator.next()).value)) {
            return memo;
        } else {
            memo = accessFrom[next];
        }
    }
    while (!isUndefined((key = (next = generator.next()).value))) {
        memo = iteratee(memo, accessFrom[key], key, accessFrom);
    }
    return memo;
}