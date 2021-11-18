"use strict";

$(function() {
    var apiURL = "https://itunes.apple.com/search?term=funk&media=music&callback=?";
    $.getJSON(apiURL, function(data) {
        console.log(data);

    });
});