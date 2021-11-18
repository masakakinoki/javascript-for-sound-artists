"use strict";


var audioContext = new AudioContext();

var audioBuffer;

var getSound = new XMLHttpRequest();
getSound.open("get", "sounds/snare.mp3", true);
getSound.responseType = "arraybuffer";

getSound.onload = function() {
    audioContext.decodeAudioData(getSound.response, function(buffer) {
        audioBuffer = buffer;
    });
};

getSound.send();




function playback() {

    //___________________________________________________BEGIN setup

    var sound = audioContext.createBufferSource();
    sound.buffer = audioBuffer;

    var merger = audioContext.createChannelMerger(2);
    var splitter = audioContext.createChannelSplitter(2);

    var leftDelay = audioContext.createDelay();
    var rightDelay = audioContext.createDelay();

    var leftFeedback = audioContext.createGain();
    var rightFeedback = audioContext.createGain();

    //____________________________________________________END setup

    sound.connect(splitter)
    sound.connect(audioContext.destination);

    splitter.connect(leftDelay, 0);
    leftDelay.delayTime.value = 0.5;


    leftDelay.connect(leftFeedback);
    leftFeedback.gain.value = 0.6;
    leftFeedback.connect(rightDelay);


    splitter.connect(rightDelay, 1);
    rightDelay.delayTime.value = 0.5;
    rightFeedback.gain.value = 0.6;




    rightDelay.connect(rightFeedback);
    rightFeedback.connect(leftDelay);

    leftFeedback.connect(merger, 0, 0);
    rightFeedback.connect(merger, 0, 1);

    //___________________________________________BEGIN output

    merger.connect(audioContext.destination);
    //___________________________________________END output

    sound.start(audioContext.currentTime);
}


window.addEventListener("mousedown", playback);