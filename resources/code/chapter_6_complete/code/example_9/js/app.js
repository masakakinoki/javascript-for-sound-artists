"use strict";




var song = {
    name: "Funky Shuffle",
    artist: "James Jackson",
    format: "wave",
    sampleRate: 44100
};

function getName() {
    return this.name;
}
var getNameOfSong = getName.bind(song); // assign bound function to a variable
//_______Then invoke it!
console.log(getNameOfSong()); // Funky Shuffle