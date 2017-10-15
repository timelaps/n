var reduction = require('../reduction');
var returnsTrue = require('@timelaps/returns/true');
var returnsSecond = require('@timelaps/returns/second');
module.exports = reduceFrom;

function reduceFrom(generate, get, transform_) {
    // no object passed back
    var transform = transform_ || returnsSecond;
    return function reducer(obj, iteratee, memo) {
        return reduction(generate(obj), get || access, transform(obj, iteratee), memo, arguments.length < 3);

        function access(key) {
            return obj[key];
        }
    };
}