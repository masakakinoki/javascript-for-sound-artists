"use strict";

var audioContext = new AudioContext();
var reverbAmountVal = 0;
var playing = undefined;
var sounds = undefined;
var reverbAmount = audioContext.createGain();


var audioContext = new AudioContext();
var impulseResponseBuffer;
var getSound = new XMLHttpRequest();
getSound.open("get", "sounds/impulse.wav", true); // impulse file
getSound.responseType = "arraybuffer";

getSound.onload = function() {
    audioContext.decodeAudioData(getSound.response, function(buffer) {
        impulseResponseBuffer = buffer;
    });
};
getSound.send();

var appSounds = {
    loop: "sounds/drums.mp3", // ________________________________Audio file directory
    nodes: function nodeGraph(sound) {

        var reverb = audioContext.createConvolver();
        reverb.buffer = impulseResponseBuffer;
        reverbAmount = audioContext.createGain();


        sound.loop = true;
        sound.connect(reverb);
        sound.connect(audioContext.destination);
        reverb.connect(reverbAmount);
        reverbAmount.connect(audioContext.destination);

    }
};

setInterval(function() {

    reverbAmount.gain.value = reverbAmountVal;
}, 50);

sounds = audioBatchLoader(appSounds);


$(function() {



    $(".transport-icon").on("click", function() {


        if (!playing) {
            playing = true;
            sounds.loop.play();
            $(".transport-icon").attr("src", "images/stop.png");

        } else {
            playing = false;
            sounds.loop.stop();
            $(".transport-icon").attr("src", "images/play.png");
        }



    });








    var sliderVals = {
        'orientation': "vertical",
        'range': "min",
        'min': 0,
        'max': 5,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {

            reverbAmountVal = +ui.value;



        }


    };

    $('#start-point-slider').slider(sliderVals);







});