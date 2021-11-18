"use strict";

var album = {
    name: "Thriller Funk",
    artist: "James Jackson",
    format: "wave",
    sampleRate: 44100
};

console.log(album.name); // Thriller Funk
console.log(album.artist); // James Jackson
console.log(album.format); // wave
console.log(album.sampleRate); // 44100

console.log(album["sampleRate"]); // 44100