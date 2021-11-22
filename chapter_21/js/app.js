"use strict";
$(function () {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();
  let analyzer = audioCtx.createAnalyser();
  let osc = audioCtx.createOscillator();

  //Create typed array
  let frequencyData = new Uint8Array(analyzer.frequencyBinCount);
  //Store frequency data
  analyzer.getByteFrequencyData(frequencyData);

  console.log("frequencyData.length: " + frequencyData.length); //1024
  console.log(frequencyData);

  let app = $(".app");
  let bars = undefined;

  osc.frequency.value = 5;
  osc.type = "sawtooth";
  osc.connect(analyzer);
  analyzer.connect(audioCtx.destination);
  osc.start(audioCtx.currentTime);
  analyzer.fftSize = 64;
  console.log("analyzer.frequencyBinCount: " + analyzer.frequencyBinCount); //1024

  //  BEGIN visualization

  $(".bin-count-number").text(analyzer.fftSize / 2); //Bin count

  for (let i = 0; i < analyzer.frequencyBinCount; i++) {

    $(".app").append("<div></div><span>" + i + "</span>");

  }

  bars = $(".app > div");

  function update() {

    requestAnimationFrame(update);

    analyzer.getByteFrequencyData(frequencyData);

    for (let i = 0; i < bars.length; i += 1) {

      bars[i].style.height = frequencyData[i] + 'px';

    }

  }

  update();

  //END visualization



});