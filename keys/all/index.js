var checkCollectNonEnumProps = require('../../collect-non-enum-props/check');
var forIn = require('../../for/in');
var second = require('@timelaps/fn/second');
var bindTo = require('@timelaps/fn/bind/to');
module.exports = function (obj) {
    var keys = [];
    forIn(obj, second(bindTo(keys.push, keys)));
    return checkCollectNonEnumProps(obj, keys);
};