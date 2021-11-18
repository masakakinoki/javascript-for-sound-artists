"use strict";

//___________________________________BEGIN Setup
var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
osc.type = "sawtooth";
osc.frequency.value = 80;
osc.connect(audioContext.destination);
//___________________________________END Setup
//___________________________________BEGIN Check frequency
if (osc.frequency.value === 80) {
    osc.start(audioContext.currentTime);
}
//___________________________________END Check frequency