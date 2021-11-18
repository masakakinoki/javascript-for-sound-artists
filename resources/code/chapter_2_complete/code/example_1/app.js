"use strict";


var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
osc.type = "sine";
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);