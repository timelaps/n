var matchesBinary = require('../matches/binary');
module.exports = commonFilter;

function commonFilter(memoMaker, reducer, passed, negated) {
    return function filter(thing, bound) {
        var matcher = matchesBinary(!negated);
        return reducer(thing, function (memo_, item, index, list) {
            var memo = memo_;
            if (matcher(bound(item, index, list))) {
                memo = passed(memo, item, index, list);
            }
            return memo;
        }, memoMaker());
    };
}