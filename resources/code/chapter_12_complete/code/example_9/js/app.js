"use strict";

function Record(title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
}
var weAreHardcore = new Record("We Are Hardcore", "The Psycho Electros", 2016);

console.log(weAreHardcore.title); // We Are Hardcore
console.log(weAreHardcore.artist); // The Psycho Electros
console.log(weAreHardcore.year); // 2016