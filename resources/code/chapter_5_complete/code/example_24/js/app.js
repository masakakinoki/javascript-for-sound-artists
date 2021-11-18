"use strict";




var audioContext = new AudioContext();

function playOsc(type) {

    return function(freq) {
        var osc = audioContext.createOscillator();
        osc.type = type;
        osc.frequency.value = freq;
        osc.connect(audioContext.destination);
        osc.start(audioContext.currentTime);
    };
}

var sinewave = playOsc("sine");

sinewave(140); //____________Plays sine wave at 140 hz