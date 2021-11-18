"use strict";
var audioContext = new AudioContext();
var oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.frequency.value = 130.81; //________C3  
oscillator.start(audioContext.currentTime);
oscillator.stop(audioContext.currentTime + 2);

var x = oscillator.onended = function() {
    oscillator = audioContext.createOscillator();
    oscillator.frequency.value = 130.81; // C3 note
    oscillator.detune.value = 100; // sets the note to one half step higher to C#3
    oscillator.connect(audioContext.destination);
    oscillator.start(audioContext.currentTime + 0.5);
    oscillator.stop(audioContext.currentTime + 2.5);


};