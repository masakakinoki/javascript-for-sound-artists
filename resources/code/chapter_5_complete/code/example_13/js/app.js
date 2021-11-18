"use strict";




var multiplier = 4; //______This variable is not referenced by multFreq
function multFreq(frequency) {
    var multiplier = 2; //_____Because this one has the same name
    return frequency * multiplier;
}
console.log(multFreq(200)); // 400
console.log(multiplier); // 4