"use strict";

//______________________________BEGIN setup

var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
osc.type = "sine";
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);

//_______________________________END setup
//_______________________________BEGIN Ternary example

osc.type === "sawtooth" ? osc.frequency.value = 50 : osc.frequency.value = 500;

//_______________________________END Ternary example