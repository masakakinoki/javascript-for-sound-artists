"use strict";

//____________________________BEGIN Setup
var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
osc.type = "sawtooth";
osc.connect(audioContext.destination);
//____________________________END Setup
//____________________________BEGIN Switch statement 
switch (osc.type) {
    case "sawtooth":
        osc.frequency.value = 50;
        osc.start(audioContext.currentTime);
        break;
    case "sine":
        osc.frequency.value = 100;
        osc.start(audioContext.currentTime);
        break;
    case "square":
        osc.frequency.value = 150;
        osc.start(audioContext.currentTime);
        break;
    default:
        osc.frequency.value = 200;
        osc.start(audioContext.currentTime);

}
//____________________________END Switch statement