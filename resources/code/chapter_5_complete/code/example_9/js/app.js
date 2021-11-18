"use strict";






function playOsc(oscType, freq) {
    if (arguments.length !== 2) {
        throw "Error! This function takes two arguments";
    }
    //_____Check for correct argument data types
    if (typeof oscType !== "string" || typeof freq !== "number") {
        throw "Please enter the correct argument types";
    }
}
playOsc(100, true); //___Please enter the correct argument types