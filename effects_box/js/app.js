"use strict";
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = new AudioContext();
let osc_1;
let osc_2;
let filter;
let oscState = false;
console.log(oscState);

// begin custom sound
function customSound(filterVal) {
  osc_1 = audioCtx.createOscillator();
  osc_2 = audioCtx.createOscillator();
  filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  osc_1.type = "sawtooth";
  osc_1.frequency.value = 30;
  osc_2.type = "sawtooth";
  osc_2.frequency.value = 40;
  filter.frequency.value = filterVal || filter.frequency.valu;
  osc_1.connect(filter);
  osc_2.connect(filter);
  filter.connect(audioCtx.destination);
  osc_1.start(audioCtx.currentTime);
  osc_2.start(audioCtx.currentTime);
  oscState = true;
  console.log(oscState);
}

// square wave
// function square(filterVal) {
//   let osc = audioCtx.createOscillator();
//   let filter = audioCtx.createBiquadFilter();
//   filter.type = "lowpass";
//   osc.type = "square";
//   osc.frequency.value = 400;
//   filter.frequency.value = filterVal || filter.getFrequencyResponse.value;
//   osc.connect(filter);
//   filter.connect(audioCtx.destination);
//   osc.start(audioCtx.currentTime);
// }

function effectsBox(sourceInput, filterParam) {
  sourceInput(filterParam);
}

effectsBox(customSound, 130);

document.getElementById("play-button").addEventListener("click", function () {
  
  if (oscState == false) {
    console.log("it's not running well!");
    console.log(audioCtx.state);
    osc_1.connect(filter);
    osc_2.connect(filter);
    oscState = true;
  } else {
    console.log("it's running well!");
    console.log(audioCtx.state);
    osc_1.disconnect();
    osc_2.disconnect();
    oscState = false;
  }
});

// function touchStarted() {
//   if (audioCtx().state !== "running") {
//     audioCtx().resume();
//   }
// }