"use strict";
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContext();

let audioBuffer;
let getSound = new XMLHttpRequest();
getSound.open("get", "sounds/snare.mp3", true);
getSound.responseType = "arraybuffer";

getSound.onload = function () {
  audioContext.decodeAudioData(getSound.response, function (buffer) {
    audioBuffer = buffer;
  });
};

getSound.send();

function playback(){
  let playSound = audioContext.createBufferSource();
  playSound.buffer = audioBuffer;
  playSound.connect(audioContext.destination);
  playSound.start(audioContext.currentTime);
}

window.addEventListener("mousedown", playback);

function touchStarted() {
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }
}