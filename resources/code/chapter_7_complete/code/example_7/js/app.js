"use strict";
var audioContext = new AudioContext();

var oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.frequency.value = 80; //_____80 hertz
oscillator.start(audioContext.currentTime);