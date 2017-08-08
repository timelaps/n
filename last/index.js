var lastIndex = require('./key');
var nth = require('../nth');
module.exports = function last(array) {
    return nth(array, lastIndex(array));
};