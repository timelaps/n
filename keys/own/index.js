var checkCollectNonEnumProps = require('../../collect-non-enum-props/check');
var forInHas = require('@timelaps/hacks/for/in/has');
var native = require('../../keys/native');
var isObject = require('@timelaps/is/object');
var second = require('@timelaps/fn/second');
var bindTo = require('@timelaps/fn/bind/to');
var isPointer = require('@timelaps/is/pointer');
module.exports = native ? function keysOwn(obj) {
    // prevent throwing
    return isPointer(obj) ? native(obj) : [];
} : own;

function own(obj) {
    var keys = [];
    forInHas(obj, second(bindTo(keys.push, keys)));
    return checkCollectNonEnumProps(obj, keys);
}