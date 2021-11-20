"use strict";
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContext();

function touchStarted() {
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }
}