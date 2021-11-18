"use strict";







//____audioContext is global
var audioContext = new AudioContext();
//____ playOsc has access to it
function playOsc(oscType, freq) {
    var osc = audioContext.createOscillator();
    osc.type = oscType;
    osc.frequency.value = freq; //____freq is a parameter
    osc.connect(audioContext.destination);
    osc.start(audioContext.currentTime);
}
playOsc("sine", 330); //____Plays oscillator at 330hz