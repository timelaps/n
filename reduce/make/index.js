var reduction = require('../reduction');
var returnsTrue = require('@timelaps/returns/true');
module.exports = function makeReduce(dir_, validation_) {
    var validation = validation_ || returnsTrue;
    return function reducer(obj, iteratee, memo) {
        return validation(obj) && reduction(obj, iteratee, memo, dir_, arguments.length < 3);
    };
};