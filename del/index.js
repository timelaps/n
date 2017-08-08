var toPath = require('@timelaps/to/path');
var deep = require('./deep');
var shallow = require('./shallow');
module.exports = function has(target, path) {
    var p = toPath(path);
    var length = p.length;
    if (length > 1) {
        return deep(target, p);
    } else if (length) {
        return shallow(target, p[0]);
    } else {
        return false;
    }
};