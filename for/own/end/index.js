var eachGenerator = require('@timelaps/fn/each');
var iterate = require('../../../iterate/own');
var forEachEnd = require('../../each/end');
module.exports = eachGenerator(iterate, forEachEnd);