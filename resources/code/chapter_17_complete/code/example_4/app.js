"use strict";


window.onload = function() {
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
            var merger = audioContext.createChannelMerger();
            var inputSource = audioContext.createBufferSource();
            inputSource.buffer = soundObj.soundToPlay;


            //_________________________________________________________________BEGIN connect merger

            inputSource.connect(merger, 0, 1); //outputs inputSource to right channel
            merger.connect(audioContext.destination);


            //_________________________________________________________________END connect merger


            inputSource.start(audioContext.currentTime + time || audioContext.currentTime);
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


    window.document.addEventListener("click", function() {

        sound.drumLoops.play();

    });

};