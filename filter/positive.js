var filter = require('./');
module.exports = positive;

function positive(memoMaker, reducer, passed) {
    return filter(memoMaker, reducer, passed);
}