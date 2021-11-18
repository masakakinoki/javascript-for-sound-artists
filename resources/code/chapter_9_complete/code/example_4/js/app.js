"use strict";
var audioContext = new AudioContext();
window.onload = function() {
    var onOff = document.getElementById("on-off");
    //_________________________________________BEGIN set initial osc state to false

    var osc = false;

    //_________________________________________END set initial osc state to false
    onOff.addEventListener("click", function() {
        //_____________________________________BEGIN Conditional statement to check if osc is TRUE or FALSE
        if (!osc) { //_________________________Is osc false? If so then create and assign oscillator to osc and play it.

            osc = audioContext.createOscillator();
            osc.type = "sawtooth";
            osc.frequency.value = 300;
            osc.connect(audioContext.destination);
            osc.start(audioContext.currentTime);


            //_________________________________Otherwise stop it and reset osc to false for next time.
        } else {

            osc.stop(audioContext.currentTime);
            osc = false;
        }
        //_____________________________________END Conditional statement to check if osc is TRUE or FALSE
    });
};