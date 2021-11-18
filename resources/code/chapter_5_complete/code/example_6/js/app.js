"use strict";


var audioContext = new AudioContext();
//___________________________________BEGIN Custom sound
function customSound(filterVal) {
    var osc_1 = audioContext.createOscillator();
    var osc_2 = audioContext.createOscillator();
    var filter = audioContext.createBiquadFilter();
    filter.type = "lowpass";
    osc_1.type = "sawtooth";
    osc_1.frequency.value = 300;
    osc_2.type = "sawtooth";
    osc_2.frequency.value = 402;
    filter.frequency.value = filterVal || filter.frequency.value;
    osc_1.connect(filter);
    osc_2.connect(filter);
    filter.connect(audioContext.destination);
    osc_1.start(audioContext.currentTime);
    osc_2.start(audioContext.currentTime);
}
//___________________________________END Custom sound

//___________________________________BEGIN square wave
function square(filterVal) {
    var osc = audioContext.createOscillator();
    var filter = audioContext.createBiquadFilter();
    filter.type = "lowpass";
    osc.type = "square";
    osc.frequency.value = 100;
    filter.frequency.value = filterVal || filter.frequency.value;
    osc.connect(filter);
    filter.connect(audioContext.destination);
    osc.start(audioContext.currentTime);
}

//___________________________________END square wave

//___________________________________BEGIN effectsBox

function effectsBox(sourceInput, filterParam) {

    sourceInput(filterParam);
}
//___________________________________END effectsBox

effectsBox(customSound, 80); // Example