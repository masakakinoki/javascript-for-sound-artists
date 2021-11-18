"use strict";
var audioContext = new AudioContext();
//_____________BEGIN create oscillator and filter
var filter = audioContext.createBiquadFilter();
var oscillator = audioContext.createOscillator();
//_____________END create oscillator and filter
//______________BEGIN connect oscillator to filter 
oscillator.connect(filter);
//_____________END connect oscillator to filter
//_____________BEGIN connect filter to computer speakers
filter.connect(audioContext.destination);
//_____________END connect filter to computer speakers

//_____________BEGIN start oscillator playing

oscillator.start(audioContext.currentTime);
//_____________END start oscillator playing