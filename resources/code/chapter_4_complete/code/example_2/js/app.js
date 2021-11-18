"use strict";

//____________________________________BEGIN Setup
var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
osc.type = "sawtooth";
osc.frequency.value = 200;
osc.connect(audioContext.destination);
//____________________________________END Setup
//____________________________________BEGIN Conditional
if (osc.frequency.value === 100) {
    //__evaluates to false
    osc.start(audioContext.currentTime);
} else {
    //__So this plays
    osc.frequency.value = 50;
    osc.start(audioContext.currentTime);

}
//____________________________________END Conditional