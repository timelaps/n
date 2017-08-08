var shallow = require('./shallow'),
    toPath = require('@timelaps/to/path'),
    isArray = require('@timelaps/is/array'),
    forEachEnd = require('../for/each/end'),
    isNil = require('@timelaps/is/nil');
module.exports = function set(target, path, value_) {
    var value = value_,
        p = isArray(path) ? path : toPath(path),
        length = p.length;
    if (length > 1) {
        return deep(target, p, value);
    } else if (length) {
        return shallow(target, p[0], value);
    } else {
        return false;
    }
};