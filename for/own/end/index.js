var eachMaker = require('@timelaps/fn/each');
var iterate = require('../../../iterate/own');
var forEachEnd = require('../../each/end');
module.exports = eachMaker(iterate, forEachEnd);