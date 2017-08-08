module.exports = function setShallow(object, key, value) {
    if (object) {
        object[key] = value;
        return true;
    }
    return false;
};