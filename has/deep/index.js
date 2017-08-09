var hasShallow = require('../shallow');
var getDeep = require('../../get');
module.exports = function hasDeep(target, path) {
    var lastIdx = path.length - 1;
    var sub = path.slice(0, lastIdx);
    var got = getDeep(target, sub);
    return hasShallow(target, path[lastIdx]);
};