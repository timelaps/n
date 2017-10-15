var reduction = require('../');
var generateIndices = require('@timelaps/fn/generator/indices');
var returnsTrue = require('@timelaps/returns/true');
var returnsSecond = require('@timelaps/returns/second');
module.exports = reduceFrom;

function reduceFrom(validator_, generate_, get, transform_) {
    // no object passed back
    var transform = transform_ || returnsSecond;
    var validator = validator_ ||returnsTrue;
    var generate = generate_ || generateIndices;
    return function reducer(obj, iteratee, memo) {
        return validator(obj) ? reduction(generate(obj), get || access, transform(obj, iteratee), memo, arguments.length < 3) : memo;

        function access(key) {
            return obj[key];
        }
    };
}