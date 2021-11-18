"use strict";


var audioContext = new AudioContext();
//_____________Added 4 variables that represent oscillator waveforms
var saw = "sawtooth";
var sine = "sine";
var tri = "triangle";
var square = "square";
var currentWaveform = undefined;
currentWaveform = square;
console.log(currentWaveform); //___ square 
//____________________________________Start of oscillator
var osc = audioContext.createOscillator();
osc.type = currentWaveform; // Assigned it to our oscillator type
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);