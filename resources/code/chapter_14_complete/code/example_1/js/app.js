"use strict";

var audioContext = new AudioContext();

//________________________________BEGIN create sawtooth oscillator
var oscSaw = audioContext.createOscillator();
oscSaw.type = "sawtooth";
oscSaw.frequency.value = 118;
oscSaw.start(audioContext.currentTime);
//________________________________END create sawtooth oscillator

//________________________________BEGIN create gain node and connect sawtooth oscillator

var gainSaw = audioContext.createGain();
gainSaw.gain.value = 0.6; // set volume
oscSaw.connect(gainSaw);

//________________________________END create gain node and connect sawtooth oscillator


//________________________________BEGIN create triangle wave oscillator
var oscTri = audioContext.createOscillator();
oscTri.type = "triangle";
oscTri.frequency.value = 120;
oscTri.start(audioContext.currentTime);
//________________________________END create triangle wave oscillator

//________________________________BEGIN create gain node and connect triangle wave oscillator

var gainTri = audioContext.createGain();
gainTri.gain.value = 3; // set volume
oscTri.connect(gainTri);

//________________________________END create gain node and connect triangle wave oscillator


//____SUM Both Oscillators___
var gainOscSum = audioContext.createGain();
gainOscSum.gain.value = 1;
gainTri.connect(gainOscSum);
gainSaw.connect(gainOscSum);
//____Connect to the audioContext.destination
gainOscSum.connect(audioContext.destination);