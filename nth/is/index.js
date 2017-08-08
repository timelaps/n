var nth = require('..');
module.exports = function nthIs(array, final, index) {
    return nth(array, index || 0) === final;
};