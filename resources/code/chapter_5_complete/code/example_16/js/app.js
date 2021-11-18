"use strict";




multFreq(200, 2); /*__This still works even though it is invoked before it is declared!_*/

function multFreq(input, val) {
    return input * val;
}