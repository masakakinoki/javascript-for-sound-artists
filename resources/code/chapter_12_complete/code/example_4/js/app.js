"use strict";

function makeRecord(title, artist, year) {
    var record = {};
    record.title = title;
    record.artist = artist;
    record.year = year;
    record.summary = function() {
        return "Title:" + record.title + ". Artist:" + record.artist + ". Year:" + record.year;
    };

    return record;
}
var weAreHardcore = makeRecord("We Are Hardcore", "The Psycho Electros", 2016);

console.log(weAreHardcore.summary()); //Title:We Are Hardcore. Artist:The Psycho Electros. Year:2016