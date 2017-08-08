var toInteger = require('@timelaps/to/integer');
module.exports = function fromTo(values, runner, _start, _end, step) {
    if (!step) {
        return;
    }
    var goingDown = step < 0,
        end = _end,
        start = _start,
        index = start,
        distance = (goingDown ? start - end : end - start) + 1,
        leftover = distance % 8,
        iterations = toInteger(distance / 8);
    if (leftover > 0) {
        do {
            runner(values[index], index, values);
            index += step;
        } while (--leftover > 0);
    }
    if (iterations) {
        do {
            runner(values[index], index, values);
            index += step;
            runner(values[index], index, values);
            index += step;
            runner(values[index], index, values);
            index += step;
            runner(values[index], index, values);
            index += step;
            runner(values[index], index, values);
            index += step;
            runner(values[index], index, values);
            index += step;
            runner(values[index], index, values);
            index += step;
            runner(values[index], index, values);
            index += step;
        } while (--iterations > 0);
    }
};