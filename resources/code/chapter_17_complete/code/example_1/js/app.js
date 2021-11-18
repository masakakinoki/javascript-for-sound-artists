"use strict";


var audioContext = new AudioContext();
var playing = false;
var panVal = 0;
var oscillator = audioContext.createOscillator();
var stereoPanner = audioContext.createStereoPanner();

// window.addEventListener("mousedown", playback);
// window.addEventListener("mouseup", endPlayback);
function playback() {
    stereoPanner = audioContext.createStereoPanner();
    oscillator = audioContext.createOscillator();
    stereoPanner.pan.value = panVal;
    oscillator.connect(stereoPanner);
    stereoPanner.connect(audioContext.destination);
    oscillator.start(audioContext.currentTime);



}

function endPlayback() {
    oscillator.stop(audioContext.currentTime);

}



$(function() {



    $(".transport-icon").on("click", function() {

        if (!playing) {
            playing = true;
            playback();
            $(".transport-icon").attr("src", "images/stop.png");

        } else {
            playing = false;
            oscillator.stop(audioContext.currentTime);
            $(".transport-icon").attr("src", "images/play.png");
        }

    });

    $("form").on("submit", function(e) {

        e.preventDefault();
        stereoPanner.pan.value = +$(".panInputVal").val();
    });


});