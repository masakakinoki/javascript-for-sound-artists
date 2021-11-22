"use strict";
// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

console.log(audioCtx.state);

document.getElementById("play-button").addEventListener("click", function () {
  
  if (audioCtx.state !== "running") {
    console.log("it's not running well");
    // osc_1.connect(filter);
    // osc_2.connect(filter);
    // oscState = true;
    audioCtx.resume();
    // audioCtx.onstatechange = () => console.log(audioCtx.state);
  } else {
    console.log("it's running");
    // osc_1.disconnect();
    // osc_2.disconnect();
    // oscState = false;
    audioCtx.suspend();
    // console.log(audioCtx.state);
    
  }
});

audioCtx.onstatechange = () => console.log(audioCtx.state);