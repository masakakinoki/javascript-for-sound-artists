"use strict";




var multiplier = 4;

function multFreq(frequency) {
    multiplier = 2; //____________Notice no var declaration!
    return frequency * multiplier;
}
console.log(multFreq(200)); // 400
console.log(multiplier); //____Changed to 2!