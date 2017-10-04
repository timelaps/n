module.exports = matchesBinary;

function matchesBinary(lookingFor) {
    var boolLookingFor = !lookingFor;
    return function (assertment) {
        var boolAssertment = !assertment;
        return boolAssertment === boolLookingFor;
    };
}