"use strict";


var audioContext = new AudioContext(); //___Initializes web audio api

function playOsc(oscType, freq) {
    var osc = audioContext.createOscillator();
    osc.type = oscType;
    osc.frequency.value = freq; //____freq is a parameter
    osc.connect(audioContext.destination);
    osc.start(audioContext.currentTime);
}

playOsc("sine", 330); //____Plays oscillator at 330hz

/*____We can play multiple oscillators at once using only
one line of code each time! Adding another sine at 340 will
create a pulsating effect*/

playOsc("sine", 340);