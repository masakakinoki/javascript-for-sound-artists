"use strict";
// for cross browser
const AudioContext = window.AudioContext || window.webkitaudioCtx;
const audioCtx = new AudioContext();

function audioFileLoader(fileDirectory) {
    let soundObj = {};
    let playSound = undefined;
    let getSound = new XMLHttpRequest();
    soundObj.fileDirectory = fileDirectory;
    getSound.open("GET", soundObj.fileDirectory, true);
    getSound.responseType = "arraybuffer";
    getSound.onload = function () {
        audioCtx.decodeAudioData(getSound.response, function (buffer) {
            soundObj.soundToPlay = buffer;

        });
    };

    getSound.send();

    soundObj.play = function (time, setStart, setDuration) {
        playSound = audioCtx.createBufferSource();
        playSound.buffer = soundObj.soundToPlay;
        playSound.connect(audioCtx.destination);
        playSound.start(audioCtx.currentTime + time || audioCtx.currentTime, setStart || 0, setDuration || soundObj.soundToPlay.duration);
        console.log(playSound.buffer);
        console.log(playSound.buffer.duration);
    };

    soundObj.stop = function (time) {
        playSound.stop(audioCtx.currentTime + time || audioCtx.currentTime);
    };
    return soundObj;
}


function audioBatchLoader(obj) {

    for (var prop in obj) {
        obj[prop] = audioFileLoader(obj[prop]);

    }

    return obj;

}