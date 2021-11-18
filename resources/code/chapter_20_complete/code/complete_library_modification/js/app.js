"use strict";

var sound = audioBatchLoader({

    test: "sounds/test.wav"

});

// window.onload = function() {

//     sound.test.play();
// }
window.addEventListener("mousedown", function() {

    sound.test.play()

});


window.addEventListener("mouseup", function() {

    sound.test.stop(1)

});