"use strict";

var futureTickTime = audioContext.currentTime;
var counter = 1;
var osc = audioContext.createOscillator();
var metronomeVolume = audioContext.createGain();

function playMetronome(time) {
    osc = audioContext.createOscillator();
    osc.connect(metronomeVolume);
    metronomeVolume.connect(audioContext.destination);
    osc.start(time);
    osc.stop(time + 0.1);

}


function scheduler() {
    if (futureTickTime < audioContext.currentTime + 0.1) {

        console.log("This is beat: " + counter);
        playMetronome(futureTickTime);
        futureTickTime += 0.5; //____can be any time value. 0.5 happens 
        //____________________________to be a quarter note at 120 bpm

        counter += 1;
        if (counter > 4) {
            counter = 1;
        }
    }
    window.setTimeout(scheduler, 0);
}
scheduler();