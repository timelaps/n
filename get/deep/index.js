module.exports = get;
var forEachEnd = require('../../for/each/end');
var isNil = require('@timelaps/is/nil');

function get(target_, path) {
    var target = target_;
    target && forEachEnd(path, function traverser(key) {
        if (isNil(target)) {
            return true;
        }
        target = target[key];
    });
    return target;
}