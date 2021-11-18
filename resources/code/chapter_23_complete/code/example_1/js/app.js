"use strict";

var kick = audioFileLoader("sounds/kick.mp3");
var snare = audioFileLoader("sounds/snare.mp3");
var hihat = audioFileLoader("sounds/hihat.mp3");



var tempo = 120; //_____BPM (beats per minute)
var eighthNoteTime = (60 / tempo) / 2;

function playDrums() {
    // Play 4 bars of the following:
    for (var bar = 0; bar < 4; bar++) {
        var time = bar * 8 * eighthNoteTime;
        // Play the bass (kick) drum on beats 1, 5
        kick.play(time);
        kick.play(time + 4 * eighthNoteTime);


        // Play the snare drum on beats 3, 7
        snare.play(time + 2 * eighthNoteTime);
        snare.play(time + 6 * eighthNoteTime);
        // Play the hi-hat every eighth note.
        for (var i = 0; i < 8; ++i) {
            hihat.play(time + i * eighthNoteTime);
        }
    }
}

window.setTimeout(function() {
    playDrums();
}, 1500);