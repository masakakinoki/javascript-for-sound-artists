"use strict";

var audioContext = new AudioContext();
var frequencyValue = 200; //___Create variable frequencyValue                                         
var waveform = "sawtooth";
var osc = audioContext.createOscillator();
osc.type = waveform;
//_____ assign it to the oscillators pitch

osc.frequency.value = frequencyValue;
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);