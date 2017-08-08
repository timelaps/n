var hasShallow = require('../shallow');
var getDeep = require('../../get');
module.exports = function hasDeep(target, path) {
    var sub = path.slice(0, path.length - 1);
    var got = getDeep(target, sub);
    return hasShallow(target, path[length - 1]);
};