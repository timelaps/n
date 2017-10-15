var reduction = require('../reduction');
var returnsTrue = require('@timelaps/returns/true');
var returnsFirst = require('@timelaps/returns/first');
module.exports = reduceFrom;

function reduceFrom(generate, get, transform_) {
    var transform = transform_ || returnsFirst;
    return function reducer(obj, iteratee, memo) {
        return reduction(generate(obj), get || access, transform(iteratee), memo, arguments.length < 3);

        function access(key) {
            return obj[key];
        }
    };
}