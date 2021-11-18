"use strict";


var audioContext = new AudioContext();
//___ 4 variables that represent oscillator waveforms
var saw = "sawtooth";
var sine = "sine";
var tri = "triangle";
var square = "square";
//___ A variable intended to contain one of these waveforms
var currentWaveform = undefined;
currentWaveform = square;
//_____________________________Start of oscillator
var osc = audioContext.createOscillator();
osc.type = currentWaveform; // Assigned it to our oscillator type
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);