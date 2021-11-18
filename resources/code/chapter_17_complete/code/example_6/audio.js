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


        var stereoInputSource = audioContext.createBufferSource();
        var merger = audioContext.createChannelMerger();
        var splitter = audioContext.createChannelSplitter();
        stereoInputSource.buffer = soundObj.soundToPlay;
        stereoInputSource.connect(splitter);
        splitter.connect(merger, 0, 1);
        splitter.connect(merger, 1, 0);
        stereoInputSource.connect(audioContext.destination); // input right and output left
        stereoInputSource.start(audioContext.currentTime + time || audioContext.currentTime);

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
    stereoDrumLoop: "sounds/drums.mp3"



});