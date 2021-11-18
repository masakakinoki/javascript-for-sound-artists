"use strict";

var synths = ['synth-1', 'synth-2', 'synth-3', 'synth-4'];
for (var i = 0; i < synths.length; i += 1) {
    synths[i] += "0hz";
}
console.log(synths); //[ 'synth-10hz', 'synth-20hz', 'synth-30hz', 'synth-40hz' ]