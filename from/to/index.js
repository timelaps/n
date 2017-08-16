var toInteger = require('@timelaps/to/integer');
module.exports = function fromTo(runner, values_, _start, _end, step) {
    if (!step) {
        return;
    }
    var values = values_,
        goingDown = step < 0,
        end = _end,
        start = _start,
        index = start,
        distance = ((goingDown ? start - end : end - start) + 1) / step,
        leftover = distance % 8,
        iterations = toInteger(distance / 8);
    if (leftover > 0) {
        do {
            values = runner(index, values);
            index += step;
        } while (--leftover > 0);
    }
    if (iterations) {
        do {
            values = runner(index, values);
            index += step;
            values = runner(index, values);
            index += step;
            values = runner(index, values);
            index += step;
            values = runner(index, values);
            index += step;
            values = runner(index, values);
            index += step;
            values = runner(index, values);
            index += step;
            values = runner(index, values);
            index += step;
            values = runner(index, values);
            index += step;
        } while (--iterations > 0);
    }
    return values;
};