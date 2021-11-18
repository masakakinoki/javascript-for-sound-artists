"use strict";
var audioContext = new AudioContext();
window.onload = function() {
    var onOff = document.getElementById("on-off");
    onOff.addEventListener("click", function() {
        var osc = audioContext.createOscillator();
        osc.type = "sawtooth";
        osc.frequency.value = 300;
        osc.connect(audioContext.destination);
        osc.start(audioContext.currentTime);
    });
};