"use strict";

// var sound = audioFileLoader("sounds/snare.mp3", function(sound) {
//     var gain = audioContext.createGain();
//     gain.gain.value = 0.2;
//     sound.connect(gain);
//     gain.connect(audioContext.destination);

// });




var sound = audioBatchLoader({
    snare: "sounds/snare.mp3",
    kick: "sounds/kick.mp3",
    hihat: "sounds/hihat.mp3",
    nodes: function(sound) {
        var gain = audioContext.createGain();
        sound.connect(gain);
        gain.gain.value = 0.8;
        gain.connect(audioContext.destination);

    }
});



window.addEventListener("mousedown", function() {
    sound.kick.play();
});

window.addEventListener("mouseup", function() {
    sound.kick.stop();
});