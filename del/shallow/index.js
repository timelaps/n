module.exports = function discard(object, key) {
    if (object) {
        return delete object[key];
    }
};