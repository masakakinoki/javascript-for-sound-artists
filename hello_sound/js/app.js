"use strict";

// 4 variables that represent oscillator waveforms
var audioContext = new AudioContext();
var saw = "sawtooth";
var sine = "sine";
var tri = "triangle";
var square = "square";
// a variable intended to contain one of these waveforms
var currentWaveform = undefined
currentWaveform = square;
// start of oscillator
var osc = audioContext.createOscillator();
osc.type = currentWaveform; // Assigned it to our oscilator type
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);