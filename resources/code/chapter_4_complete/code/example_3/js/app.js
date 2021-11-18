"use strict";

var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
osc.type = "sawtooth";
osc.connect(audioContext.destination);
if (osc.type === "sine") {
    osc.start(audioContext.currentTime);
} else if (osc.type === "sawtooth") {
    osc.frequency.value = 50;
    osc.start(audioContext.currentTime);
} else {
    console.log("no condition met");
}