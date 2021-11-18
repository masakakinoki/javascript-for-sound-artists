"use strict";

var album = {
    name: "Funky Shuffle",
    artist: "James Jackson",
    format: "wave",
    sampleRate: 44100
};
var song = {
    name: "Analogue Heaven",
    artist: "The Keep It Reels",
    getNameAndArtist: function() {

        return "Name: " + this.name + " | Artist: " + this.artist;
    }
};

var getNameOfAlbum = song.getNameAndArtist.bind(album);
console.log(getNameOfAlbum()); //Name: Thriller | Artist: James Jackson