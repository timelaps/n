module.exports = function valuesIteratee(collection, bound, array) {
    return array ? function valuesIterateeSetter(item, index, object) {
        collection.push(bound(item, index, object));
    } : function valuesIterateeSetter(item, key, object) {
        collection[key] = bound(item, key, object);
    };
};