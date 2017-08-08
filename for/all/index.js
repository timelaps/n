var eachGenerator = require('@timelaps/fn/each');
var iterate = require('../../iterate/all');
var forEach = require('../each');
module.exports = eachGenerator(iterate, forEach);