"use strict";

function makeRecord(title, artist, year) {
    var record = {};
    record.title = title;
    record.artist = artist;
    record.year = year;
    record.fullAlbum = true;

    return record;
}

var weAreHardcore = makeRecord("We Are Hardcore", "The Psycho Electros", 2016);
console.log(weAreHardcore.fullAlbum); // true