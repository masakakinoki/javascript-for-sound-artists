"use strict";



var song = {
    name: "Funky Shuffle",
    artist: "James Jackson",
    format: "wave",
    sampleRate: 44100
};

//______________________BEGIN for in loop
for (var prop in song) {
    console.log(prop + ":"); //__Outputs each key
    console.log(song[prop]); //__Outputs each value
}
//______________________END for in loop