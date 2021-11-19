"use strict";

// Helper function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
// End Helper function

var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
osc.type = "sawtooth"; // Assigned it to our oscilator type
osc.frequency.value = 30;
osc.connect(audioContext.destination);
osc.start(audioContext.currentTime);

for(var i = 0; i < 20; i+=1){
  osc.frequency.value +=100;
  sleep(00);
}