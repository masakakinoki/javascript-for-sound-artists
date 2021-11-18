"use strict";



var audioContext = new AudioContext();

function audioFileLoader(fileDirectory) {
    var soundObj = {};
    var playSound = undefined;
    soundObj.fileDirectory = fileDirectory;
    var getSound = new XMLHttpRequest();
    getSound.open("GET", soundObj.fileDirectory, true);
    getSound.responseType = "arraybuffer";
    getSound.onload = function() {
        audioContext.decodeAudioData(getSound.response, function(buffer) {
            soundObj.soundToPlay = buffer;

        });
    };

    getSound.send();



    soundObj.play = function(time) {


        var multiChannelInputSource = audioContext.createBufferSource();
        var merger = audioContext.createChannelMerger(1); // Set number of channels
        multiChannelInputSource.buffer = soundObj.soundToPlay;
        multiChannelInputSource.connect(merger);
        merger.connect(audioContext.destination);
        multiChannelInputSource.start(audioContext.currentTime + time || audioContext.currentTime);

    };

    soundObj.stop = function(time) {
        playSound.stop(audioContext.currentTime + time || audioContext.currentTime);
    };
    return soundObj;
}


function audioBatchLoader(obj) {

    for (var prop in obj) {
        obj[prop] = audioFileLoader(obj[prop]);

    }
    return obj;

}


var sound = audioBatchLoader({
    stereoDrumLoop: "sounds/drums.mp3",
    sixChannelFile: "sounds/6_channel_file.wav"



});

$(function() {

    $("#stereo").on("click", function() {

        sound.stereoDrumLoop.play();
    });

    $("#6-channel-file").on("click", function() {

        sound.sixChannelFile.play();
    });




});