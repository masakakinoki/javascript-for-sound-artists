"use strict";
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContext();
window.onload = function () {
  let onOff = document.getElementById("on-off");
  let span = document.getElementsByTagName("span")[0];
  /*BEGIN set initial osc state to false*/
  let osc = false;
  /* END set initial osc state to false */
  onOff.addEventListener("click", function () {
    if (!osc) {
      osc = audioContext.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.value = 300;
      osc.connect(audioContext.destination);
      osc.start(audioContext.currentTime);
      onOff.value = "stop";
      span.innerHTML = "Click to stop oscillator";
    } else {
      osc.stop(audioContext.currentTime);
      osc = false;
      onOff.value = "start";
      span.innerHTML = "Click to start oscillator";
    }
  });
};

function touchStarted() {
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }
}