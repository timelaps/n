var arrayKeyGenerator = require('@timelaps/fn/generator');
var keys = require('..');
module.exports = function valueGenerator(object, dir, cap, incrementor) {
    var objectKeys = keys(object);
    return arrayKeyGenerator(objectKeys, dir, cap, incrementor, proxy);

    function proxy(value) {
        return objectKeys[value];
    }
};