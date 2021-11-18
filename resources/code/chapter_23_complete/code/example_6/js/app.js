"use strict";


var futureTickTime = audioContext.currentTime,
    counter = 1,
    tempo = 120,
    secondsPerBeat = 60 / tempo,
    counterTimeValue = (secondsPerBeat / 4),
    osc = audioContext.createOscillator(),
    metronomeVolume = audioContext.createGain();

//_____________________________________________BEGIN metronome 
function playMetronome(time, playing) {
    if (playing) {
        osc = audioContext.createOscillator();
        osc.connect(metronomeVolume);
        metronomeVolume.connect(audioContext.destination);
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
        playTick();
    }
    window.setTimeout(scheduler, 0);
}
scheduler();