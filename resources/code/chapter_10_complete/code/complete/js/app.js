"use strict";
var audioContext = new AudioContext();

$(function() {
    var $onOff = $("#on-off"); //_____________________JQuery selector
    var $messageText = $("span"); //__________________JQuery selector
    var $freqSliderVal = $("input").eq(1).val(); //___JQuery selector
    var osc = false;
    var selectedWaveform = "sawtooth";

    //__________________________________________________BEGIN <li> selection code


    $("li").on("click", function() {
        selectedWaveform = this.id;
        $("li").removeClass("selected-waveform");
        $(this).addClass("selected-waveform");

    });

    //__________________________________________________END <li> selection code


    setInterval(function() {
        if (!osc) {
            console.log("Oscillator is stopped. Waiting for oscillator to start");
        } else {

            $freqSliderVal = $("input").eq(1).val()
            osc.frequency.value = $freqSliderVal;
            console.log("Oscillator is playing. Frequency value is " + $freqSliderVal);
            osc.type = selectedWaveform;
        }
    }, 50);


    $onOff.on("click", function() {
        if (!osc) {
            osc = audioContext.createOscillator();
            osc.type = selectedWaveform;
            osc.frequency.value = $freqSliderVal;
            osc.connect(audioContext.destination);
            osc.start(audioContext.currentTime);
            $onOff.val("stop");
            $messageText.text("Click to stop oscillator");
        } else {

            osc.stop(audioContext.currentTime);
            osc = false;
            $onOff.val("start");
            $messageText.text("Click to start oscillator");
        }

    });

});