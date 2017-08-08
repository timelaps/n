var eachGenerator = require('@timelaps/fn/each');
var iterate = require('../../iterate/own');
var forEach = require('../each');
module.exports = eachGenerator(iterate, forEach);