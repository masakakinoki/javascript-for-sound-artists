"use strict";

$(function() {

    var sound = audioBatchLoader({
        song: "sounds/song.mp3"


    });

    var playing = false;

    var sliderParams64Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter1.gain.value = ui.value;

        }
    };

    $('#filter64Hz').slider(sliderParams64Hz);

    var sliderParams150Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter2.gain.value = ui.value;

        }
    };

    $('#filter150Hz').slider(sliderParams150Hz);







    var sliderParams350Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter3.gain.value = ui.value;

        }
    };

    $('#filter350Hz').slider(sliderParams350Hz);



    var sliderParams1000Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter4.gain.value = ui.value;

        }
    };

    $('#filter1000Hz').slider(sliderParams1000Hz);




    var sliderParams2000Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter5.gain.value = ui.value;

        }
    };

    $('#filter2000Hz').slider(sliderParams2000Hz);


    var sliderParams6000Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter6.gain.value = ui.value;

        }
    };

    $('#filter6000Hz').slider(sliderParams6000Hz);


    var sliderParams12000Hz = {
        'orientation': "vertical",
        'range': "min",
        'min': -30,
        'max': 30,
        'animate': true,
        'step': 0.01,
        'slide': function(event, ui) {
            window.filter7.gain.value = ui.value;

        }
    };

    $('#filter12000Hz').slider(sliderParams12000Hz);



    $(".transport-icon").on("click", function() {

        if (!playing) {
            playing = true;
            sound.song.play();
            $(".transport-icon").attr("src", "images/stop.png");

        } else {
            playing = false;
            sound.song.stop();
            $(".transport-icon").attr("src", "images/play.png");
        }

    });

});