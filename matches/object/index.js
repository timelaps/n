var match = require('../');
module.exports = objectMatch;

function objectMatch(obj1, extent) {
    return function (obj2) {
        return match(obj2, obj1, extent);
    };
}