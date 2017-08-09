module.exports = contains;
var indexOf = require('../index/of');

function contains(list, item, start, end) {
    return indexOf(list, item, start, end) !== -1;
}