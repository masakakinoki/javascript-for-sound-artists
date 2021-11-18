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
weAreHardcore.leadSinger = "Fred The Butcher";
weAreHardcore.getAllProperties = function() {
    for (var prop in weAreHardcore) {
        if (typeof weAreHardcore[prop] != "function") { //_______________Loop ignores methods!
            console.log(prop + ":" + weAreHardcore[prop]); //____________Only loops through properties
        }
    }
};

weAreHardcore.getAllProperties();

/*_____________________RESULT

title:We Are Hardcore
artist:The Psycho Electros
year:2016
leadSinger:Fred The Butcher

___________________________*/