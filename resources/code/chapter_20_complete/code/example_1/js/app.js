"use strict";

var audioContext = new AudioContext();

window.setInterval(function() {
    $(".time").empty();
    $(".time").append("<li>" + audioContext.currentTime + "</li>");
}, 500);