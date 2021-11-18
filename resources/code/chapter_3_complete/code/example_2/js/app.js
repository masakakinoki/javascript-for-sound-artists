"use strict";

var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
osc.frequency.value = 300;
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);
setInterval(function() {
    osc.frequency.value += 100; //____Increment frequency value by 100 every 0.5 seconds
    console.log(osc.frequency.value); //_____View change
}, 500); //________________________500 milliseconds is 0.5 seconds