"use strict";

// 4 variables that represent oscillator waveforms
var oscillator = "saw" + "tooth";
console.log(oscillator);
var phrase = "This sound is an ";
var soundType = "oscillator";
var sentence = phrase + soundType;
console.log(sentence);
var myFavoriteSynthCompany = "My favorite synth company is Moog";
console.log(myFavoriteSynthCompany.length);
var audioContext = new AudioContext();
var saw = "sawtooth";
var sine = "sine";
var tri = "triangle";
var square = "square";
// a variable intended to contain one of these waveforms
var currentWaveform = undefined
console.log(currentWaveform); 
currentWaveform = square;
console.log(currentWaveform); 
// start of oscillator
var osc = audioContext.createOscillator();
osc.type = currentWaveform; // Assigned it to our oscilator type
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);