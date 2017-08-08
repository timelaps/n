var shallow = require('./shallow');
var deep = require('./deep');
var toPath = require('@timelaps/to/path');
var isArray = require('@timelaps/is/array');
module.exports = function get(target, path, value) {
    var p = isArray(path) ? path : toPath(path);
    var length = p.length;
    if (length > 1) {
        return deep(target, p);
    } else if (length) {
        return shallow(target, p[0]);
    }
};