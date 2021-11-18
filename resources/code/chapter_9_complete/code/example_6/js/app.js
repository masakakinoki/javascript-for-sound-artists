"use strict";
var audioContext = new AudioContext();
window.onload = function() {
    var onOff = document.getElementById("on-off");
    var span = document.getElementsByTagName("span")[0];

    //_________________________________________BEGIN set initial osc state to false
    var osc = false;
    //_________________________________________END set initial osc state to false
    onOff.addEventListener("click", function() {
        //_____________________________________BEGIN Conditional statement to check if osc is TRUE or FALSE
        var freqSliderVal = document.getElementsByTagName("input")[1].value;

        console.log(freqSliderVal);

        if (!osc) { //_________________________Is osc false? If so then create and assign oscillator to osc variable and play it.
            osc = audioContext.createOscillator();
            osc.type = "sawtooth";
            osc.frequency.value = freqSliderVal;
            osc.connect(audioContext.destination);
            osc.start(audioContext.currentTime);
            onOff.value = "stop";
            span.innerHTML = "Click to stop oscillator";
            //_________________________________Otherwise stop it and reset osc to false for next time.
        } else {

            osc.stop(audioContext.currentTime);
            osc = false;
            onOff.value = "start";
            span.innerHTML = "Click to start oscillator";
        }
        //_____________________________________END Conditional statement to check if osc is TRUE or FALSE
    });
};