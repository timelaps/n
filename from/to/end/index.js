module.exports = function fromToEnd(callback, values_, _start, _end, _step) {
    var limit, counter, value, continues = values_,
        step = _step || 1,
        end = _end,
        start = _start,
        goingDown = step < 0,
        index = start;
    if (goingDown ? start < end : start > end) {
        return -1;
    }
    limit = ((goingDown ? start - end : end - start)) / Math.abs(step || 1);
    for (counter = 0; index >= 0 && counter <= limit; counter++) {
        if ((continues = callback(index, continues))) {
            return index;
        }
        index += step;
    }
    return -1;
};