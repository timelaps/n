var eachMaker = require('@timelaps/fn/each');
var iterate = require('../../iterate/all');
var forEach = require('../each');
module.exports = eachMaker(iterate, forEach);