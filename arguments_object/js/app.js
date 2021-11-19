"use strict";

function playOsc(oscType) {
  var waveforms = ["sawtooth", "sine", "triangle", "square"];
  var waveformValid = false;
  for (var i = 0; i < waveforms.length; i += 1) {
    if (arguments[0] === waveforms[i]) {
      waveformValid = true;
    }
  }
  if (waveformValid === false){
    throw "please enter sawtooth, sine, triangle or square as an argument"
  }
}
playOsc("fat beats");
playOsc("square");