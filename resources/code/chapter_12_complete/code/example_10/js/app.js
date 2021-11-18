"use strict";

function Record(title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.fullAlbum = true; // default value
}

var weAreHardcore = new Record("We Are Hardcore", "The Psycho Electros", 2016);

console.log(weAreHardcore.fullAlbum); // true