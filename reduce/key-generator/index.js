var isObject = require('@timelaps/is/object');
var returnsFirst = require('@timelaps/returns/first');
var isArrayLike = require('@timelaps/is/array-like');
var generator = require('@timelaps/fn/generator');
var noop = require('@timelaps/fn/noop');
var generatorLeft = require('@timelaps/fn/generator/indices');
var generatorRight = require('@timelaps/fn/generator/indices/right');
var keys = require('../../keys');
module.exports = keyGenerator;

function keyGenerator(object, dir, cap, incrementor) {
    var gen = noop;
    if (isArrayLike(object)) {
        gen = arrayKeyGenerator(object, dir, cap, incrementor);
    } else if (isObject(object)) {
        gen = objectKeyGenerator(object, dir, cap, incrementor);
    }
    return gen;
}

function arrayKeyGenerator(array, dir, cap, incrementor, transformer_) {
    var transformer = transformer_ || returnsFirst;
    var generator = dir === -1 ? generatorRight : generatorLeft;
    var generated = generator(array);
    return function () {
        return transformer(generated.next().value);
    };
}

function objectKeyGenerator(object, dir, cap, incrementor) {
    var k = keys(object);
    return arrayKeyGenerator(k, dir, cap, incrementor, function (index) {
        // returns the key to be used
        return k[index];
    });
}