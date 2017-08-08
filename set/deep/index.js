var forEachEnd = require('../../for/each/end'),
    isNil = require('@timelaps/is/nil');
module.exports = function setDeep(target_, path, value_) {
    var value = value_;
    var target = target_;
    target && forEachEnd(path, function traverser(key, index, list) {
        if (isNil(target)) {
            value = false;
            return true;
        } else if (index < list.length - 1) {
            target = target[key];
        } else {
            target[key] = value;
            value = true;
            return true;
        }
    });
    return value;
};