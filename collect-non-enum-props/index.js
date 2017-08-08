var CONSTRUCTOR = 'constructor';
var has = require('../has');
var isFunction = require('@timelaps/is/function');
var nonEnumerableProps = require('@timelaps/constants/non-enumerables');
module.exports = function (obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj[CONSTRUCTOR];
    var proto = (isFunction(constructor) && constructor.prototype) || ObjProto;
    // Constructor is a special case.
    var prop = CONSTRUCTOR;
    if (has(obj, prop) && keys.indexOf(prop) === -1) {
        keys.push(prop);
    }
    while (nonEnumIdx--) {
        prop = nonEnumerableProps[nonEnumIdx];
        if (prop in obj && obj[prop] !== proto[prop] && !contains(keys, prop)) {
            keys.push(prop);
        }
    }
};