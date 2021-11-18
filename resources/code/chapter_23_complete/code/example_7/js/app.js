"use strict";
var audioContext = new AudioContext();
var futureTickTime = audioContext.currentTime,
    counter = 1,
    tempo = 120,
    secondsPerBeat = 60 / tempo,
    counterTimeValue = (secondsPerBeat / 4),
    osc = audioContext.createOscillator();

//_____________________________________________BEGIN load sound samples

var kick = audioFileLoader("sounds/kick.mp3");
var snare = audioFileLoader("sounds/snare.mp3");
var hihat = audioFileLoader("sounds/hihat.mp3");
var shaker = audioFileLoader("sounds/shaker.mp3");



//_____________________________________________END load sound samples

//_____________________________________________BEGIN Array Tracks

var kickTrack = [1, 9, 11],
    snareTrack = [5, 13],
    hiHatTrack = [13, 14, 15, 16],
    shakerTrack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


//_____________________________________________END Array Tracks

function scheduleSound(trackArray, sound, count, time) {

    for (var i = 0; i < trackArray.length; i += 1) {
        if (count === trackArray[i]) {
            sound.play(time);
        }
    }

}



//_____________________________________________BEGIN metronome 
function playMetronome(time, playing) {

    if (playing) {
        osc = audioContext.createOscillator();
        osc.connect(audioContext.destination);
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

//______________________________________________END Metronome


function playTick() {

    console.log("This is 16th note: " + counter);
    counter += 1;
    futureTickTime += counterTimeValue;

    if (counter > 16) {
        counter = 1;
    }

}



function scheduler() {
    if (futureTickTime < audioContext.currentTime + 0.1) {
        playMetronome(futureTickTime, true);

        scheduleSound(kickTrack, kick, counter, futureTickTime - audioContext.currentTime);
        scheduleSound(snareTrack, snare, counter, futureTickTime - audioContext.currentTime);
        scheduleSound(hiHatTrack, hihat, counter, futureTickTime - audioContext.currentTime);
        scheduleSound(shakerTrack, shaker, counter, futureTickTime - audioContext.currentTime);

        playTick();
    }

    window.setTimeout(scheduler, 0);
}


scheduler();