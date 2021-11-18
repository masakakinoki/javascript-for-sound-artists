"use strict";



var song = {
    name: "Funky Shuffle",
    artist: "James Jackson",
    format: "wave",
    sampleRate: 44100,
    nameAndArtist: function() {
        return "Name: " + song.name + " | " + "Artist: " + song.artist
    }

}


for (var prop in song) {
    if (typeof song[prop] !== "function") {
        console.log(song[prop]); //___Omits methods
    };
};