var reduction = require('../reduction');
var returnsTrue = require('@timelaps/returns/true');
module.exports = function makeReducer(dir_, validation_, generator) {
    var validation = validation_ || returnsTrue;
    return function reducer(obj, iteratee, memo) {
        return validation(obj) && reduction(generator, obj, iteratee, memo, dir_, arguments.length < 3);
    };
};