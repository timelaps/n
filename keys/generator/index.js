var gen = require('@timelaps/fn/generator');
var keys = require('..');
module.exports = function valueGenerator(object, dir, cap, incrementor) {
    var objectKeys = keys(object);
    return gen(objectKeys, dir, cap, incrementor, proxy);

    function proxy(value) {
        return objectKeys[value];
    }
};