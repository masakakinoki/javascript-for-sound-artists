"use strict";

$(function() {

    var futureTickTime = audioContext.currentTime,
        counter = 1,
        tempo = 120,
        secondsPerBeat = 60 / tempo,
        counterTimeValue = (secondsPerBeat / 4),
        osc = audioContext.createOscillator(),
        metronomeVolume = audioContext.createGain(),
        timerID = undefined,
        isPlaying = false;



    //_____________________________________________BEGIN load sound samples

    var kick = audioFileLoader("sounds/kick.mp3");
    var snare = audioFileLoader("sounds/snare.mp3");
    var hihat = audioFileLoader("sounds/hihat.mp3");
    var shaker = audioFileLoader("sounds/shaker.mp3");



    //_____________________________________________END load sound samples

    //_____________________________________________BEGIN Array Tracks

    var kickTrack = [],
        snareTrack = [],
        hiHatTrack = [],
        shakerTrack = [];


    //_____________________________________________END Array Tracks

    function scheduleSound(trackArray, sound, count, time) {

        for (var i = 0; i < trackArray.length; i += 1) {
            if (count === trackArray[i]) {
                sound.play(time);
            }
        }

    }



    //_____________________________________________BEGIN metronome 
    function playMetronome(time, playing) {

        if (playing) {
            osc = audioContext.createOscillator();
            osc.connect(metronomeVolume);
            metronomeVolume.connect(audioContext.destination);
            osc.frequency.value = 500;
            if (counter === 1) {
                osc.frequency.value = 500;
            } else {
                osc.frequency.value = 300;
            }
            osc.start(time);
            osc.stop(time + 0.1);
        }
    }

    //______________________________________________END Metronome


    function playTick() {
        secondsPerBeat = 60 / tempo;
        counterTimeValue = (secondsPerBeat / 4);
        console.log("This is 16th note: " + counter);
        counter += 1;
        futureTickTime += counterTimeValue;

        if (counter > 16) {
            counter = 1;
        }

    }



    function scheduler() {
        if (futureTickTime < audioContext.currentTime + 0.1) {
            playMetronome(futureTickTime, true);
            scheduleSound(kickTrack, kick, counter, futureTickTime - audioContext.currentTime);
            scheduleSound(snareTrack, snare, counter, futureTickTime - audioContext.currentTime);
            scheduleSound(hiHatTrack, hihat, counter, futureTickTime - audioContext.currentTime);
            scheduleSound(shakerTrack, shaker, counter, futureTickTime - audioContext.currentTime);
            playTick();
        }

        timerID = window.setTimeout(scheduler, 0);
    }

    // scheduler();


    function play() {
        isPlaying = !isPlaying;

        if (isPlaying) {
            counter = 1;
            futureTickTime = audioContext.currentTime;
            scheduler();
        } else {
            window.clearTimeout(timerID);

        }
    }




    for (var i = 1; i <= 4; i += 1) {

        $(".app-grid").append("<div class='track-" + i + "-container'</div>");


        for (var j = 1; j < 17; j += 1) {

            $(".track-" + i + "-container").append("<div class='grid-item track-step step-" + j + "'</div>");

        }


    }



    $(".play-stop-button").on("click", function() {

        play();

    });

    $(".metronome").on("click", function() {

        if (metronomeVolume.gain.value) {
            metronomeVolume.gain.value = 0;

        } else {
            metronomeVolume.gain.value = 1;
        }



    });

    $("#tempo").on("change", function() {
        tempo = this.value;
        $("#showTempo").html(tempo);
    });


    function sequenceGridToggler(domEle, arr) {
        $(domEle).on("mousedown", ".grid-item", function() {


            var gridIndexValue = $(this).index(); //__________Get index of grid-item
            var offset = gridIndexValue + 1; //_______________Add +1 so value starts at 1 instead of 0
            var index = arr.indexOf(offset); //_______________Check if value exists in array


            if (index > -1) { //______________________________If index of item exist.....

                arr.splice(index, 1); //______________________then remove it....
                $(this).css("backgroundColor", ""); //________and change color of DOM element to default
                console.log(arr);

            } else { //_______________________________________If item does not exist.....

                arr.push(offset); //__________________________then push it to track array
                $(this).css("background-color", "purple"); //_and change color of DOM element to purple.
                console.log(arr);



            }





        });

    }

    sequenceGridToggler(".track-1-container", kickTrack);
    sequenceGridToggler(".track-2-container", snareTrack);
    sequenceGridToggler(".track-3-container", hiHatTrack);
    sequenceGridToggler(".track-4-container", shakerTrack);








});