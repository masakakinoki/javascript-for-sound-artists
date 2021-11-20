"use strict";
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContext();
$(function () {

  let $onOff = $("#on-off");
  let $messageText = $("span");
  let $freqSliderVal = $("input").eq(1).val();
  let osc = false;
  let selectedWaveform = "sawtooth";

  // END set selected waveform type value


  $("li").on("click", function () {
    selectedWaveform = this.id;
    $("li").removeClass("selected-waveform");
    $(this).addClass("selected-waveform");
  });


  /*   BEGIN check range slider value and set frequency of oscillator*/
  setInterval(function () {
    if (!osc) {
      console.log("Oscillator is stopped. Waiting for oscillator to start");
    } else {

      $freqSliderVal = $("input").eq(1).val();
      osc.frequency.value = $freqSliderVal;
      console.log("Oscillator is playing. Frequency value is " + $freqSliderVal);
      osc.type = selectedWaveform;
    }

  }, 50);
  /* End check range slider value and set frequency of oscillator*/

  $onOff.on("click", function () {
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

function touchStarted() {
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }
}