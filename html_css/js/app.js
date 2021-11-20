"use strict";
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContext();
window.onload = function () {
  let onOff = document.getElementById("on-off");
  let span = document.getElementsByTagName("span")[0];
  /*BEGIN set initial osc state to false*/
  let osc = false;
  /* END set initial osc state to false */

  let freqSliderVal = document.getElementsByTagName("input")[1].value;

  // BEGIN set selected waveform type calue

  let selectedWaveform = "sawtooth";

  // END set selected waveform type value


  // BEGIN select all <li> elements
  let waveformTypes = document.getElementsByTagName("li");
  // END select all <li> elements

  // BEGIN callback to select <li> by id and assign id name to selectedWaveform

  function select() {
    selectedWaveform = document.getElementById(this.id).id;
    console.log(selectedWaveform);
  }

  // END callback to select <li> by id and assign id name to selectedWaveform

  // BEGIN loop through all <li> elements and set a click eventListner on them

  for (let i = 0; i < waveformTypes.length; i++) {
    waveformTypes[i].addEventListener("click", select);
  }

  // END loop through all <li> elements and set a click eventListner on them


  /*   BEGIN check range slider value and set frequency of oscillator*/
  setInterval(function () {

    if (!osc) {

      console.log("Oscillator is stopped. Waiting for oscillator to start");

    } else {

      freqSliderVal = document.getElementsByTagName("input")[1].value;
      osc.frequency.value = freqSliderVal;
      console.log("Oscillator is playing. Frequency value is " + freqSliderVal);
      osc.type = selectedWaveform;
    }

  }, 50);
  /* End check range slider value and set frequency of oscillator*/

  onOff.addEventListener("click", function () {

    if (!osc) {
      osc = audioContext.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.value = freqSliderVal;
      osc.connect(audioContext.destination);
      osc.start(audioContext.currentTime);
      onOff.value = "stop";
      span.innerHTML = "Click to stop oscillator";
    } else {
      osc.stop(audioContext.currentTime);
      osc = false;
      onOff.value = "start";
      span.innerHTML = "Click to start oscillator";
    }
  });
};

function touchStarted() {
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }
}