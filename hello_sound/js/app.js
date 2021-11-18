"use strict";

var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
var waveformType = "sawtooth"; // oscillator variable
osc.type = waveformType;
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);