"use strict";

var futureTickTime = audioContext.currentTime;
var counter = 1;
var tempo = 120;
var secondsPerBeat = 60 / tempo;
var counterTimeValue = (secondsPerBeat / 4); //___16th note
var osc = audioContext.createOscillator();
var metronomeVolume = audioContext.createGain();

function playMetronome(time) {
    osc = audioContext.createOscillator();
    osc.connect(metronomeVolume);
    metronomeVolume.connect(audioContext.destination);
    osc.frequency.value = 500;
    osc.start(time);
    osc.stop(time + 0.1);

}


function scheduler() {
    while (futureTickTime < audioContext.currentTime + 0.1) {
        console.log("This is 16th is: " + counter);
        playMetronome(futureTickTime);
        futureTickTime += counterTimeValue;

        if (counter === 1) {
            osc.frequency.value = 500;
        } else {
            osc.frequency.value = 300;
        }

        counter += 1;
        if (counter > 16) {
            counter = 1;
        }
    }
    window.setTimeout(scheduler, 0);
}

scheduler();