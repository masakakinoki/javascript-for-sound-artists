"use strict";
var audioContext = new AudioContext();
var apiReader = function(endpoint, patchProp) {

    $(function() {

        $.getJSON(endpoint, function(data) {
            app.patchParams = data[patchProp];
        });

    });
    var app = {
        patchParams: undefined,
        gainNodes: undefined,
        oscillators: undefined,


        play: function(id) {

            app.gainNodes = app.patchParams.map(function(val) {

                var gain = audioContext.createGain();
                gain.gain.value = val.volume;
                return gain;

            });

            app.oscillators = app.patchParams.map(function(val, i) {

                var osc = audioContext.createOscillator();
                osc.type = val.type;
                osc.frequency.value = val.frequency;
                osc.detune.value = (val.frequency) + (id * 100);
                osc.connect(app.gainNodes[i]);
                app.gainNodes[i].connect(audioContext.destination);
                osc.start(audioContext.currentTime);

                return osc;
            });
        },
        stop: function() {
            for (var i = 0; i < app.oscillators.length; i += 1) {
                app.oscillators[i].stop(audioContext.currentTime);
            }
        }
    };
    return app;
};