var isUndefined = require('@timelaps/is/undefined');
module.exports = reduction;

function reduction(generator, get, iteratee, memo_, startsAt1) {
    var next, value, memo = memo_;
    if (startsAt1) {
        if (isUndefined((value = (next = generator.next()).value))) {
            return memo;
        } else {
            memo = get(value);
        }
    }
    while (!isUndefined((value = (next = generator.next()).value))) {
        memo = iteratee(memo, get(value));
    }
    return memo;
}