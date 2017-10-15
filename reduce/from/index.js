var reduction = require('../');
var generateIndices = require('@timelaps/fn/generator/indices');
var returnsTrue = require('@timelaps/returns/true');
module.exports = reduceFrom;

function reduceFrom(validator_, generate_, get, transform_) {
    // no object passed back
    var transform = transform_ || passThroughObject;
    var validator = validator_ ||returnsTrue;
    var generate = generate_ || generateIndices;
    return function reducer(obj, iteratee, memo) {
        return validator(obj) ? reduction(generate(obj), get || access, transform(obj, iteratee), memo, arguments.length < 3) : memo;

        function access(key) {
            return obj[key];
        }
    };
}

function passThroughObject(object, iterator) {
    return function (memo, value, key) {
        return iterator(memo, value, key, object);
    };
}