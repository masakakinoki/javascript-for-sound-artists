"use strict";
var synth = apiReader("js/data.js", "gameSound");
$(function() {
    $(".key").on("mouseover", function() {
        var index = $(this).index('.key');
        synth.play(index);
    });
    $(".key").on("mouseout", function() {
        synth.stop();
    });
    $.getJSON("js/data.js", function(data){
        console.log(data);
    });
});
