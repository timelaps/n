module.exports = function valuesIteratee(collection, bound, isArray, object) {
    return isArray ? function valuesIterateeSetter(value, index, object) {
        collection.push(bound(value, index, object));
    } : function valuesIterateeSetter(value, key, object) {
        collection[key] = bound(value, key, object);
    };
};