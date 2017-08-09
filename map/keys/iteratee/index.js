module.exports = function iterateKeys(collection, bound) {
    return function keysRunner(item, key, object) {
        collection[bound(item, key, object)] = item;
    };
};