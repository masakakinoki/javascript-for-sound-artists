"use strict";


var audioContext = new AudioContext();

var audioBuffer;

var getSound = new XMLHttpRequest();
getSound.open("get", "sounds/drums.mp3", true);
getSound.responseType = "arraybuffer";

getSound.onload = function() {
    audioContext.decodeAudioData(getSound.response, function(buffer) {
        audioBuffer = buffer;
    });
};

getSound.send();

window.addEventListener("mousedown", playback);


function playback() {



    //___________________________________________________BEGIN setup
    var compressor = audioContext.createDynamicsCompressor();

    var sound = audioContext.createBufferSource();
    sound.buffer = audioBuffer;

    //____________________________________________________END setup

    sound.connect(compressor);
    compressor.threshold.value = -40;
    compressor.ratio.value = 12;

    //___________________________________________BEGIN output

    compressor.connect(audioContext.destination);
    //___________________________________________END output

    sound.start(audioContext.currentTime);

    window.setInterval(function() {
        console.log(compressor.reduction.value);
    }, 50);

}