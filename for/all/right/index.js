var eachGenerator = require('@timelaps/fn/each');
var iterate = require('../../iterate/all');
var forEachRight = require('../each/right');
module.exports = eachGenerator(iterate, forEachRight);