"use strict";

/*__________________________________BEGIN Helper function.
Ignore this code it is simply being used to pause the for loop */
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
//__________________________________END Helper function
//__________________________________BEGIN Web Audio API setup
var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
osc.type = "sawtooth";
osc.frequency.value = 30;
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);

//__________________________________END Web Audio API setup
//_________________________________BEGIN audible for-loop example
for (var i = 0; i < 10; i += 1) {
    osc.frequency.value += 100;
    sleep(500);
}
//_________________________________END audible for-loop example