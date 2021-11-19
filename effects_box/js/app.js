"use strict";
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();
// begin custom sound
function customSound(filterVal){
  var osc_1 = audioContext.createOscillator();
  var osc_2 = audioContext.createOscillator();
  var filter = audioContext.createBiquadFilter();
  filter.type = "lowpass";
  osc_1.type = "sawtooth";
  osc_1.frequency.value = 30;
  osc_2.type = "sawtooth";
  osc_2.frequency.value = 40;
  filter.frequency.value = filterVal || filter.frequency.valu;
  osc_1.connect(filter);
  osc_2.connect(filter);
  filter.connect(audioContext.destination);
  osc_1.start(audioContext.currentTime);
  osc_2.start(audioContext.currentTime);
}

// square wave
function square(filterVal){
  var osc = audioContext.createOscillator();
  var filter = audioContext.createBiquadFilter();
  filter.type = "lowpass";
  osc.type = "square";
  osc.frequency.value = 400;
  filter.frequency.value = filterVal || filter.getFrequencyResponse.value;
  osc.connect(filter);
  filter.connect(audioContext.destination);
  osc.start(audioContext.currentTime);
}

function effectsBox(sourceInput, filterParam){
  sourceInput(filterParam);
}

effectsBox(customSound, 130);