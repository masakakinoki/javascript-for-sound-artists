"use strict";

console.log(audioCtx.currentTime);

const sound = audioBatchLoader({

    kick: "sounds/kick.mp3",
    snare: "sounds/snare.mp3",
    hihat: "sounds/hihat.mp3",
    shaker: "sounds/shaker.mp3",
    nodes: function (sound) {
        let gain = audioCtx.createGain();
        sound.connect(gain);
        gain.gain.value = 0.5;
        gain.connect(audioCtx.destination);
    }
});

window.addEventListener("mousedown", function () {
    console.log(sound);
    sound.kick.play();
    sound.snare.play(0.1, 0.1, 3.0);
    // sound.hihat.play(0.3);
    // sound.shaker.play(0.4)
});

window.addEventListener("mouseup", function () {
    console.log(sound);
    sound.kick.stop();
    sound.snare.stop();
    // sound.hihat.play(0.3);
    // sound.shaker.play(0.4)
});