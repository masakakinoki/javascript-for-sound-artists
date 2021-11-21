"use strict";

var sound = audioBatchLoader({

    kick: "sounds/kick.mp3",
    snare: "sounds/snare.mp3",
    hihat: "sounds/hihat.mp3",
    shaker: "sounds/shaker.mp3"

});


window.addEventListener("mousedown", function() {

    sound.kick.play(0.1);
    sound.snare.play();
    sound.hihat.play(0.9);
    sound.shaker.play(1.0);

});