"use strict";

window.onload = function() {

    var audioContext = new AudioContext();
    var stereoInputSource = audioContext.createBufferSource();
    var splitter = audioContext.createChannelSplitter();

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
            stereoInputSource.buffer = soundObj.soundToPlay;
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
        drumLoops: "sounds/drums.mp3",


    });


    var rightChan = document.getElementById("right-chan");

    rightChan.addEventListener("click", function() {
        stereoInputSource = audioContext.createBufferSource();
        splitter = audioContext.createChannelSplitter();
        stereoInputSource.connect(splitter);
        splitter.connect(audioContext.destination, 0); // left output
        // splitter.connect(audioContext.destination, 1); // right output
        sound.drumLoops.play();

    });

    var leftChan = document.getElementById("left-chan");

    leftChan.addEventListener("click", function() {
        stereoInputSource = audioContext.createBufferSource();
        splitter = audioContext.createChannelSplitter();
        stereoInputSource.connect(splitter);
        // splitter.connect(audioContext.destination, 0); // left output
        splitter.connect(audioContext.destination, 1); // right output
        sound.drumLoops.play();

    });


};