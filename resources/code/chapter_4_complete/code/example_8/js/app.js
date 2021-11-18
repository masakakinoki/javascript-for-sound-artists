"use strict";

var synths = [];
for (var i = 1; i <= 4; i += 1) {
    synths.push("synth-" + i);
}
console.log(synths); //[ 'synth-1', 'synth-2', 'synth-3', 'synth-4' ]