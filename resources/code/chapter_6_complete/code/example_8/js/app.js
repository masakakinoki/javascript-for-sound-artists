"use strict";




var song = {
    name: "Funky Shuffle",
    artist: "James Jackson",
    format: "wave",
    sampleRate: 44100,
    //_____________________________BEGIN Method
    nameAndArtist: function() {
        return "Name: " + this.name + " | " + "Artist:" + this.artist;
    }

    //_____________________________END Method

};