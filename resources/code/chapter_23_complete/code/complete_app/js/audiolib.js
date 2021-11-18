"use strict";

var audioContext = new AudioContext();

function audioFileLoader(fileDirectory, callback) {
    var soundObj = {};
    var playSound = undefined;
    var getSound = new XMLHttpRequest();
    soundObj.fileDirectory = fileDirectory;
    getSound.open("GET", soundObj.fileDirectory, true);
    getSound.responseType = "arraybuffer";
    getSound.onload = function() {
        audioContext.decodeAudioData(getSound.response, function(buffer) {
            soundObj.soundToPlay = buffer;

        });
    };

    getSound.send();

    soundObj.play = function(time) {
        playSound = audioContext.createBufferSource();
        playSound.buffer = soundObj.soundToPlay;
        playSound.start(audioContext.currentTime + time || audioContext.currentTime);


        if (typeof callback === "function") {
            return callback(playSound);
        } else {
            return playSound.connect(audioContext.destination);
        }

    };

    soundObj.stop = function(time) {
        playSound.stop(audioContext.currentTime + time || audioContext.currentTime);
    };
    return soundObj;
}


function audioBatchLoader(obj) {

    var callback = undefined;
    var prop = undefined;

    for (prop in obj) {
        if (typeof obj[prop] === "function") {
            callback = obj[prop];
            delete obj[prop];
        }
    }


    for (prop in obj) {
        obj[prop] = audioFileLoader(obj[prop], callback);

    }

    return obj;

}