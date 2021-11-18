"use strict";

var kick = audioFileLoader("sounds/kick.mp3");
var snare = audioFileLoader("sounds/snare.mp3");
var hihat = audioFileLoader("sounds/hihat.mp3");

var tempo = 120; //_____BPM (beats per minute)
var milliseconds = 1000;
var eighthNoteTime = ((60 * milliseconds) / tempo) / 2;

var counter = 1;



window.setInterval(function() {

    if (counter === 8) {
        counter = 1;
    } else {
        counter += 1;
    }

    if (counter) {
        hihat.play();
    }

    if (counter === 3 || counter === 7) {
        snare.play();
    }

    if (counter === 1 || counter === 5) {
        kick.play();
    }

    console.log(counter);

}, eighthNoteTime);