"use strict";




var song = {
    name: "Funky Shuffle",
    artist: "James Jackson",
    format: "wave",
    sampleRate: 44100,
    //_____________________________BEGIN Method
    nameAndArtist: function() {
        return "Name: " + song.name + " | " + "Artist: " + song.artist;
    }
    //_____________________________END Method
};

console.log(song.nameAndArtist()); // Name: Funky Shuffle | Artist: James Jackson