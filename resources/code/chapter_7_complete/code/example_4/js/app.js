"use strict";
var audioContext = new AudioContext();
var oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start(audioContext.currentTime);
oscillator.stop(audioContext.currentTime + 3);

oscillator.onended = function() {

    oscillator.start(audioContext.currentTime);

};