"use strict";

var audioContext = new AudioContext();

var osc = audioContext.createOscillator();
osc.start(audioContext.currentTime);
var filter = audioContext.createBiquadFilter();
filter.type = "lowpass";
osc.connect(filter);
filter.connect(audioContext.destination);