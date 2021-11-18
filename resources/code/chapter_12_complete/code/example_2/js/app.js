"use strict";

function makeRecord(title, artist, year) {
    var record = {};
    record.title = title;
    record.artist = artist;
    record.year = year;

    return record;
}

var weAreHardcore = makeRecord("We Are Hardcore", "The Psycho Electros", 2016);

console.log(weAreHardcore.title); // "We Are Hardcore"
console.log(weAreHardcore.artist); // "The Psycho Electros"
console.log(weAreHardcore.year); //  2016