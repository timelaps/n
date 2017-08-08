var forOwn = require('../../for/own');
var passesFirstArgument = require('@timelaps/fn/first');
var bindTo = require('@timelaps/fn/bind/to');
var push = [].push;
var isPointer = require('@timelaps/is/pointer');
var native = require('../native');
module.exports = native ? function shim(object) {
    return isPointer(object) ? native(object) : [];
} : own;

function own(object) {
    var collected = [];
    forOwn(object, passesFirstArgument(bindTo(push, collected)));
    return collected;
}