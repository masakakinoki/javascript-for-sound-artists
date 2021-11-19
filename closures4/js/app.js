"use strict";

var audioContext = new AudioContext();

function playOsc(type){

  return function(freq){
    let osc = audioContext.createOscillator();
    osc.type = type;
    osc.frequency.value = freq;
    osc.connect(audioContext.destination);
    osc.start(audioContext.currentTime);
  };
}
playOsc("sine")(50);