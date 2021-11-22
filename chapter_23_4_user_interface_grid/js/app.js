"use strict";

$(function () {
    let futureTickTime = audioCtx.currentTime;
    let counter = 1;
    let tempo = 120;
    let secondsPerBeat = 60 / tempo;
    let counterTimeValue = (secondsPerBeat / 4); // 16th note
    let osc = audioCtx.createOscillator();
    let metronomeVolume = audioCtx.createGain();
    let timerID = undefined;
    let isPlaying = false;

    //BEING load sound samples

    let kick = audioFileLoader("sounds/kick.mp3");
    let snare = audioFileLoader("sounds/snare.mp3");
    let hihat = audioFileLoader("sounds/hihat.mp3");
    let shaker = audioFileLoader("sounds/shaker.mp3");

    //END load sound smaple

    //BEGIN Array Tracks

    let kickTrack = [1, 9, 11],
        snareTrack = [5, 13],
        hiHatTrack = [13, 14, 15, 16],
        shakerTrack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    //END Array Tracks

    function scheduleSound(trackArray, sound, count, time) {

        for (let i = 0; i < trackArray.length; i += 1) {
            if (count === trackArray[i]) {
                sound.play(time);
            }
        }
    }

    //BEGIN metronome function playMetronome (time, playing)

    function playMetronome(time, playing) {
        if (playing) {
            osc = audioCtx.createOscillator();
            osc.connect(metronomeVolume);
            metronomeVolume.connect(audioCtx.destination);
            osc.frequency.value = 500;
            if (counter === 1) {
                osc.frequency.value = 500;
            } else {
                osc.frequency.value = 300;
            }
            osc.start(time);
            osc.stop(time + 0.1);
        }
    }
    //END Metronome 

    function playTick() {
        console.log("This is 16th note: " + counter);
        counter += 1;
        futureTickTime += counterTimeValue;
        if (counter > 16) {
            counter = 1;
        }
    }

    function scheduler() {
        // console.log("scheduler now!");

        if (futureTickTime < audioCtx.currentTime + 0.1) {
            playMetronome(futureTickTime, true);

            scheduleSound(kickTrack, kick, counter, futureTickTime - audioCtx.currentTime);
            scheduleSound(snareTrack, snare, counter, futureTickTime - audioCtx.currentTime);
            scheduleSound(hiHatTrack, hihat, counter, futureTickTime - audioCtx.currentTime);
            scheduleSound(shakerTrack, shaker, counter, futureTickTime - audioCtx.currentTime);

            playTick();
            // console.log("This 16th note is: " + counter);
            // console.log("16th is: " + counterTimeValue);
            // console.log("time: " + time);
            // console.log("futureTickTime: " + futureTickTime);
            // console.log("Web Audio Time: " + audioCtx.currentTime);
        }
        timerID = window.setTimeout(scheduler, 0);
    }
    // scheduler();
    function play() {
        isPlaying = !isPlaying;

        if (isPlaying) {
            counter = 1;
            futureTickTime = audioCtx.currentTime;
            scheduler();
        } else {
            window.clearTimeout(timerID);
        }
    }
    $(".play-stop-button").on("click", function () {
        play();
    });
});

// var kick = audioFileLoader("sounds/kick.mp3");
// var snare = audioFileLoader("sounds/snare.mp3");
// var hihat = audioFileLoader("sounds/hihat.mp3");



// var tempo = 120; //_____BPM (beats per minute)
// var eighthNoteTime = (60 / tempo) / 2;

/* function playDrums() {
    // Play 4 bars of the following:
    for (var bar = 0; bar < 4; bar++) {
        var time = bar * 8 * eighthNoteTime;
        // Play the bass (kick) drum on beats 1, 5
        kick.play(time);
        kick.play(time + 4 * eighthNoteTime);


        // Play the snare drum on beats 3, 7
        snare.play(time + 2 * eighthNoteTime);
        snare.play(time + 6 * eighthNoteTime);
        // Play the hi-hat every eighth note.
        for (var i = 0; i < 8; ++i) {
            hihat.play(time + i * eighthNoteTime);
        }
    }
} */

// window.addEventListener("mousedown", function () {
// playDrums();
// console.log(sound);
// sound.kick.play();
// sound.snare.play(0.1, 0.1, 3.0);
// sound.hihat.play(0.3);
// sound.shaker.play(0.4)
// });

// window.addEventListener("mouseup", function () {
// console.log(sound);
// sound.kick.stop();
// sound.snare.stop();
// sound.hihat.play(0.3);
// sound.shaker.play(0.4)
// }); 


/* window.setTimeout(function() {
    playDrums();
}, 1500); */

/* 
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
*/