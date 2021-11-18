"use strict";

$(function() {

    var audioContext = new AudioContext();
    var playing = undefined;
    var left = audioContext.createGain();
    var right = audioContext.createGain();
    var leftVal = 1;
    var rightVal = 1;

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
            var splitter = audioContext.createChannelSplitter(2);
            var pannerLeft = audioContext.createStereoPanner();
            var pannerRight = audioContext.createStereoPanner();
            left = audioContext.createGain();
            right = audioContext.createGain();
            playSound = audioContext.createBufferSource();
            playSound.loop = true;
            playSound.buffer = soundObj.soundToPlay;
            playSound.connect(splitter);
            splitter.connect(left, 0); //___connect left channel to gain node
            splitter.connect(right, 1); //__connect right channel to gain node
            left.gain.value = leftVal; //_________independent left channel control
            right.gain.value = rightVal; //________independent right channel control
            left.connect(pannerLeft);
            pannerLeft.pan.value = -1;
            pannerRight.pan.value = 1;
            right.connect(pannerRight);
            pannerLeft.connect(audioContext.destination);
            pannerRight.connect(audioContext.destination);
            playSound.start(audioContext.currentTime + time || audioContext.currentTime);
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
        drums: "sounds/drums.mp3",


    });


    $(".transport-icon").on("click", function() {


        if (!playing) {
            playing = true;
            sound.drums.play();
            $(".transport-icon").attr("src", "images/stop.png");

        } else {
            playing = false;
            sound.drums.stop();
            $(".transport-icon").attr("src", "images/play.png");
        }



    });


    setInterval(function() {

        left.gain.value = leftVal;
        right.gain.value = rightVal;
    }, 50);



    var leftSliderVals = {
        'orientation': "vertical",
        "value": 1,
        'range': "min",
        'min': 0,
        'max': 3,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {

            leftVal = +ui.value;



        }


    };

    $('#left-slider').slider(leftSliderVals);



    var rightSliderVals = {
        'orientation': "vertical",
        "value": 1,
        'range': "min",
        'min': 0,
        'max': 3,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {

            rightVal = +ui.value;



        }


    };

    $('#right-slider').slider(rightSliderVals);
});