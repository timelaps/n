module.exports = keys;
var isPointer = require('@timelaps/is/pointer');
var own = keys.own = require('./own');
keys.all = require('./all');
keys.native = require('./native');
keys.ENUM_BUG = require('@timelaps/constants/enum-bug');

function keys(obj) {
    // just an optimized path for own
    if (!isPointer(obj)) {
        return [];
    }
    return own(obj);
}