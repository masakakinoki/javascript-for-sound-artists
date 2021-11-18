"use strict";

function Record(title, artist, year) {
    this.title = title;
    this.artist = artist;
    this.year = year;
}
Record.prototype.summary = function() {
    return "Title:" + this.title + ". Artist:" + this.artist + ". Year:" + this.year;
};


var weAreHardcore = new Record("We Are Hardcore", "The Psycho Electros", 2016);
weAreHardcore.summary(); // Title:We Are Hardcore. Artist:The Psycho Electros. Year:2016