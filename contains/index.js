module.exports = contains;
var indexOf = require('../index/of');

function contains(ndxOf, list, item, start, end) {
    return (ndxOf || indexOf)(list, item, start, end) !== -1;
}